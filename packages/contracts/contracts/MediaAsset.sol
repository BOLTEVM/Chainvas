// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/// @title MediaAsset
/// @notice ERC-721 NFT for BOLTChainvas media assets, targeted at the Quai Network EVM
///         (Solidity <= 0.8.20, evmVersion: london).
/// @dev Hardened with Foundry tests + Slither:
///      - state is written before `_safeMint` (checks-effects-interactions)
///      - `mintMedia` is reentrancy-guarded against ERC721 receiver callbacks
///      - inputs validated (zero address, empty URI)
///      - metadata reads revert for nonexistent tokens instead of returning zero values
contract MediaAsset is ERC721URIStorage, AccessControl, ReentrancyGuard {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    uint256 private _nextTokenId;

    enum MediaType { TEXT, PHOTO, VIDEO }

    struct MediaMetadata {
        MediaType mediaType;
        address creator;
        uint256 timestamp;
    }

    mapping(uint256 => MediaMetadata) private _mediaData;

    event MediaMinted(
        uint256 indexed tokenId,
        MediaType mediaType,
        address indexed creator,
        address indexed to,
        string tokenURI
    );

    error ZeroAddress();
    error EmptyTokenURI();
    error NonexistentToken(uint256 tokenId);

    constructor() ERC721("BOLTChainvasMedia", "BCVM") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    /// @notice Mint a new media NFT.
    /// @param to Recipient of the NFT.
    /// @param uri Metadata/content URI (e.g. ipfs://...).
    /// @param mediaType Media classification (TEXT=0, PHOTO=1, VIDEO=2).
    /// @return tokenId The id of the newly minted token.
    function mintMedia(address to, string memory uri, MediaType mediaType)
        external
        onlyRole(MINTER_ROLE)
        nonReentrant
        returns (uint256 tokenId)
    {
        if (to == address(0)) revert ZeroAddress();
        if (bytes(uri).length == 0) revert EmptyTokenURI();

        // Effects: commit id and metadata before any external interaction.
        tokenId = _nextTokenId;
        unchecked {
            _nextTokenId = tokenId + 1;
        }
        _mediaData[tokenId] = MediaMetadata({
            mediaType: mediaType,
            creator: msg.sender,
            timestamp: block.timestamp
        });

        // Interactions: _safeMint may call back into `to`.
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        emit MediaMinted(tokenId, mediaType, msg.sender, to, uri);
    }

    /// @notice Read the metadata for a minted token. Reverts for nonexistent tokens.
    function getMediaMetadata(uint256 tokenId) external view returns (MediaMetadata memory) {
        // Reverts with ERC721NonexistentToken if the token was never minted.
        _requireOwned(tokenId);
        MediaMetadata memory data = _mediaData[tokenId];
        if (data.creator == address(0)) revert NonexistentToken(tokenId);
        return data;
    }

    /// @notice Total number of tokens minted so far (ids are sequential from 0).
    function totalMinted() external view returns (uint256) {
        return _nextTokenId;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
