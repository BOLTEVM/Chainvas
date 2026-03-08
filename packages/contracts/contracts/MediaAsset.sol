// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MediaAsset is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    enum MediaType { TEXT, PHOTO, VIDEO }

    struct MediaMetadata {
        MediaType mediaType;
        address creator;
        uint256 timestamp;
    }

    mapping(uint256 => MediaMetadata) public mediaData;

    event MediaMinted(uint256 indexed tokenId, MediaType mediaType, address indexed creator, string tokenURI);

    constructor() ERC721("BOLTChainvasMedia", "BCVM") Ownable(msg.sender) {}

    function mintMedia(address to, string memory uri, MediaType mediaType) public returns (uint256) {
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
}
