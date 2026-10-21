// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "forge-std/Test.sol";
import "../../contracts/MediaToken.sol";

contract MediaTokenTest is Test {
    event TokenMinted(address indexed to, uint256 amount, address indexed minter);

    MediaToken internal token;
    address internal admin = address(this);
    address internal minter = makeAddr("minter");
    address internal alice = makeAddr("alice");

    bytes32 internal constant MINTER_ROLE = keccak256("MINTER_ROLE");

    function setUp() public {
        token = new MediaToken("BOLTChainvasToken", "BCVT");
        token.grantRole(MINTER_ROLE, minter);
    }

    function test_Deployment() public view {
        assertEq(token.name(), "BOLTChainvasToken");
        assertEq(token.symbol(), "BCVT");
        assertEq(token.decimals(), 18);
        assertEq(token.totalSupply(), 0);
        assertTrue(token.hasRole(token.DEFAULT_ADMIN_ROLE(), admin));
        assertTrue(token.hasRole(MINTER_ROLE, admin));
    }

    function test_MintToken() public {
        vm.prank(minter);
        token.mintToken(alice, 1000 ether);
        assertEq(token.balanceOf(alice), 1000 ether);
        assertEq(token.totalSupply(), 1000 ether);
    }

    function test_MintEmitsEvent() public {
        vm.expectEmit(true, true, false, true);
        emit TokenMinted(alice, 5 ether, minter);
        vm.prank(minter);
        token.mintToken(alice, 5 ether);
    }

    function test_RevertMintWithoutRole() public {
        vm.prank(alice);
        vm.expectRevert();
        token.mintToken(alice, 1 ether);
    }

    function test_RevertMintToZeroAddress() public {
        vm.prank(minter);
        vm.expectRevert(MediaToken.ZeroAddress.selector);
        token.mintToken(address(0), 1 ether);
    }

    function test_RevertMintZeroAmount() public {
        vm.prank(minter);
        vm.expectRevert(MediaToken.ZeroAmount.selector);
        token.mintToken(alice, 0);
    }

    function test_BurnReducesSupply() public {
        vm.prank(minter);
        token.mintToken(alice, 10 ether);

        vm.prank(alice);
        token.burn(4 ether);

        assertEq(token.balanceOf(alice), 6 ether);
        assertEq(token.totalSupply(), 6 ether);
    }

    function test_TransferWorks() public {
        vm.prank(minter);
        token.mintToken(alice, 3 ether);

        vm.prank(alice);
        token.transfer(admin, 1 ether);

        assertEq(token.balanceOf(alice), 2 ether);
        assertEq(token.balanceOf(admin), 1 ether);
    }

    function testFuzz_MintAmount(uint256 amount) public {
        vm.assume(amount > 0 && amount <= type(uint128).max);
        vm.prank(minter);
        token.mintToken(alice, amount);
        assertEq(token.balanceOf(alice), amount);
    }

    function testFuzz_OnlyMinterCanMint(address caller, uint256 amount) public {
        vm.assume(caller != admin && caller != minter);
        vm.assume(amount > 0);
        vm.prank(caller);
        vm.expectRevert();
        token.mintToken(caller, amount);
    }
}
