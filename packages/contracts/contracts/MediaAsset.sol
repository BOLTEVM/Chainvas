// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MediaAsset is ERC721URIStorage, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private _nextTokenId;

    enum MediaType { TEXT, PHOTO, VIDEO }

    struct MediaMetadata {
        MediaType mediaType;
        address creator;
        uint256 timestamp;
    }

    mapping(uint256 => MediaMetadata) public mediaData;

    event MediaMinted(uint256 indexed tokenId, MediaType mediaType, address indexed creator, string tokenURI);

    constructor() ERC721("BOLTChainvasMedia", "BCVM") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function mintMedia(address to, string memory uri, MediaType mediaType) public onlyRole(MINTER_ROLE) returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        mediaData[tokenId] = MediaMetadata({
            mediaType: mediaType,
            creator: msg.sender,
            timestamp: block.timestamp
        });

        emit MediaMinted(tokenId, mediaType, msg.sender, uri);

        return tokenId;
    }

    function getMediaMetadata(uint256 tokenId) public view returns (MediaMetadata memory) {
        return mediaData[tokenId];
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721URIStorage, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
