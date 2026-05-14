# Copper Coin (CPEG)

Fixed-supply ERC-20 token on Ethereum, pegged to physical copper.

## Token Details

| Item | Value |
|------|-------|
| Token Name | Copper Coin |
| Symbol | CPEG |
| Decimals | 18 |
| Total Supply | 1,800,000,000 CPEG |
| Asset Peg | 1 CPEG ≈ 1 pound (453.6 g) of copper |
| Standard | ERC-20 (OpenZeppelin) |
| Network | Ethereum Mainnet |
| Mintable | No |
| Burnable | No |

## Issuer

| Item | Details |
|------|---------|
| Company | AIC Stable Limited / Advance Industry Congo SARL |
| Address | Aegis Chambers, 1st Floor, Ellen Skelton Building, 3076 Sir Francis Drake Highway, Road Town, Tortola, VG1110, British Virgin Islands |
| DRC Office | 8, av. MWENZE, Q/MUNUA, C/Lubumbashi, V/Lubumbashi, Katanga, DRC |
| Mining License | PE14927 |
| License Registry | https://drclicences.cami.cd/en/ |

## Contract Design

The CPEG token is intentionally minimal for maximum security and auditability:

- Inherits only `ERC20` from OpenZeppelin (audited library)
- Total supply is minted once at deployment and **cannot be changed**
- No mint function - supply is permanently fixed
- No burn function - tokens cannot be destroyed
- No admin roles or owner privileges
- No pause or blacklist functionality
- No upgradability

## Build & Test

```bash
npm install
npx hardhat compile
npx hardhat test
```

## Security

The contract has zero custom logic beyond the constructor. All token functionality is provided by the battle-tested OpenZeppelin ERC20 implementation.

## License

MIT
