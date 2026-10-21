// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title MediaToken
/// @notice Role-gated ERC-20 utility token for BOLTChainvas, targeted at the
///         Quai Network EVM (Solidity <= 0.8.20, evmVersion: london).
/// @dev Hardened with Foundry tests + Slither:
///      - pinned compiler, access-controlled minting only
///      - explicit input validation (zero address, zero amount)
///      - burn support so holders can reduce supply
contract MediaToken is ERC20, ERC20Burnable, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    event TokenMinted(address indexed to, uint256 amount, address indexed minter);

    error ZeroAddress();
    error ZeroAmount();

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    /// @notice Mint `amount` tokens to `to`. Caller must hold MINTER_ROLE.
    function mintToken(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        if (to == address(0)) revert ZeroAddress();
        if (amount == 0) revert ZeroAmount();
        _mint(to, amount);
        emit TokenMinted(to, amount, msg.sender);
    }
}
