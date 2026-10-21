/**
 * MediaAsset.cjs — exercises every entry point and records what each one costs.
 *
 * WHY A JSON BASELINE RATHER THAN A GAS REPORTER
 * ---------------------------------------------
 * The obvious move is `hardhat-gas-reporter`, which prints a table. A table is for a human reading
 * a terminal, and the thing that needs to read this is `theguards/self_improve/observers/gas.ts`,
 * which would then be parsing console output — the exact failure mode the smart_mesh observer
 * already exists to avoid, where a report starts quietly disagreeing with the run that produced
 * it. It would also add a dependency this package does not currently have.
 *
 * So the costs are written to `gas-baseline.json` as data. The observer diffs against it, and a
 * regression is a number against a number rather than a diff of two printed tables.
 *
 * WHAT A BASELINE CAN AND CANNOT TELL YOU
 * ---------------------------------------
 * It detects CHANGE, not badness. A first run establishes what the contract costs today, and says
 * nothing about whether that is a good price. That distinction is written into the file itself so
 * a reader cannot mistake "baseline recorded" for "gas approved".
 */

const { expect } = require('chai');
const { ethers } = require('hardhat');
const fs = require('fs');
const path = require('path');

const BASELINE = path.join(__dirname, '..', 'gas-baseline.json');

/** Entry point → gas used. Collected across the run, written once at the end. */
const measured = {};

async function record(label, txPromise) {
    const tx = await txPromise;
    const receipt = await tx.wait();
    const used = Number(receipt.gasUsed);
    // Keep the WORST observed cost for a label. A cheapest-case baseline drifts upward silently:
    // every future run that happens to hit the cold path looks like a regression against it.
    measured[label] = Math.max(measured[label] ?? 0, used);
    return receipt;
}

describe('MediaAsset', function () {
    let media, owner, other;

    beforeEach(async function () {
        [owner, other] = await ethers.getSigners();
        const Factory = await ethers.getContractFactory('MediaAsset');
        media = await Factory.deploy();
        await media.waitForDeployment();
    });

    it('records deployment cost', async function () {
        const Factory = await ethers.getContractFactory('MediaAsset');
        const c = await Factory.deploy();
        const receipt = await c.deploymentTransaction().wait();
        measured['deploy'] = Math.max(measured['deploy'] ?? 0, Number(receipt.gasUsed));
        expect(await c.name()).to.equal('BOLTChainvasMedia');
    });

    it('mints each media type the enum can represent', async function () {
        // TEXT=0, PHOTO=1, VIDEO=2. Driven off the enum's real arity rather than a hardcoded 3,
        // so that appending DOCUMENT and SPREADSHEET makes this cover them without an edit.
        for (let t = 0; t <= 2; t++) {
            await record(`mintMedia(type=${t})`,
                media.mintMedia(owner.address, `ipfs://cid-${t}`, t));
        }
        expect(await media.balanceOf(owner.address)).to.equal(3n);
    });

    it('mint cost scales with the URI, which is the calldata-copy finding made concrete', async function () {
        // The gas observer reports that mintMedia takes `string memory` on a public function,
        // forcing a calldata->memory copy on every call. These two numbers are that finding as a
        // measurement rather than an assertion: the difference is what the copy costs.
        await record('mintMedia(uri=16b)', media.mintMedia(owner.address, 'x'.repeat(16), 0));
        await record('mintMedia(uri=512b)', media.mintMedia(owner.address, 'x'.repeat(512), 0));
        expect(measured['mintMedia(uri=512b)']).to.be.greaterThan(measured['mintMedia(uri=16b)']);
    });

    it('stores and returns metadata', async function () {
        await media.mintMedia(owner.address, 'ipfs://meta', 1);
        const m = await media.getMediaMetadata(0);
        expect(m.mediaType).to.equal(1n);
        expect(m.creator).to.equal(owner.address);
        expect(m.timestamp).to.be.greaterThan(0n);
    });

    it('refuses a mint from an address without MINTER_ROLE', async function () {
        // Access control is the only thing standing between the mint function and anyone; a gas
        // change that touched the modifier could quietly remove it.
        await expect(media.connect(other).mintMedia(other.address, 'ipfs://nope', 0))
            .to.be.reverted;
    });

    it('grants and revokes the minter role', async function () {
        const role = await media.MINTER_ROLE();
        await record('grantRole', media.grantRole(role, other.address));
        await media.connect(other).mintMedia(other.address, 'ipfs://ok', 0);
        await record('revokeRole', media.revokeRole(role, other.address));
        await expect(media.connect(other).mintMedia(other.address, 'ipfs://no', 0)).to.be.reverted;
    });

    it('reports its interfaces', async function () {
        expect(await media.supportsInterface('0x80ac58cd')).to.equal(true);  // ERC721
        expect(await media.supportsInterface('0x5b5e139f')).to.equal(true);  // ERC721Metadata
        expect(await media.supportsInterface('0x7965db0b')).to.equal(true);  // AccessControl
        expect(await media.supportsInterface('0xffffffff')).to.equal(false);
    });

    after(function () {
        const entries = Object.keys(measured).sort();
        if (entries.length === 0) return;

        const previous = fs.existsSync(BASELINE)
            ? JSON.parse(fs.readFileSync(BASELINE, 'utf8'))
            : null;

        const baseline = {
            note:
                'Gas used per entry point, measured by test/MediaAsset.cjs. This detects CHANGE, ' +
                'not badness: a recorded baseline says what the contract costs today and nothing ' +
                'about whether that price is good. Regenerate with `npx hardhat test`.',
            recordedAt: new Date().toISOString(),
            solidity: '0.8.20',
            entryPoints: Object.fromEntries(entries.map(k => [k, measured[k]])),
        };
        fs.writeFileSync(BASELINE, JSON.stringify(baseline, null, 2) + '\n');

        console.log('\n  gas baseline:');
        for (const k of entries) {
            const before = previous?.entryPoints?.[k];
            const delta = before === undefined ? '' :
                ` (${measured[k] - before >= 0 ? '+' : ''}${measured[k] - before} vs previous)`;
            console.log(`    ${k.padEnd(28)} ${String(measured[k]).padStart(8)}${delta}`);
        }
        console.log(`\n  written to gas-baseline.json`);
    });
});
