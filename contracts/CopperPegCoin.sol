// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title Copper Coin (CPEG)
 * @notice Fixed-supply ERC-20 token. No mint, no burn, no admin functions.
 * @dev On-chain token name "Copper Coin", symbol "CPEG", 18 decimals, fixed
 *      total supply 1,800,000,000 CPEG minted once at deployment and cannot be
 *      changed. The contract/source name is CopperPegCoin (CPEG = "Copper Peg").
 */
contract CopperPegCoin is ERC20 {
    uint256 private constant TOTAL_SUPPLY = 1_800_000_000 ether;

    constructor(address recipient) ERC20("Copper Coin", "CPEG") {
        require(recipient != address(0), "zero address");
        _mint(recipient, TOTAL_SUPPLY);
    }
}
