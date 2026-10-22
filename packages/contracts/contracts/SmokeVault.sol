// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

/// @title SmokeVault — minimal MediaAsset-shaped stub for DANTE gallery end-to-end tests.
/// Mirrors the read surface DANTE's renderer uses: totalMinted, tokenURI, getMediaMetadata.
contract SmokeVault {
    enum MediaType { TEXT, PHOTO, VIDEO }

    string private _uri;
    MediaType private _mediaType;

    constructor(string memory uri, MediaType mediaType) {
        _uri = uri;
        _mediaType = mediaType;
    }

    function totalMinted() external pure returns (uint256) {
        return 1;
    }

    function tokenURI(uint256 tokenId) external view returns (string memory) {
        require(tokenId == 0, "nonexistent token");
        return _uri;
    }

    function getMediaMetadata(uint256 tokenId) external view returns (MediaType, address, uint256) {
        require(tokenId == 0, "nonexistent token");
        return (_mediaType, msg.sender, block.timestamp);
    }
}
