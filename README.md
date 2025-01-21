# README.md

## Shesha Dialectics DAO

### Overview
Shesha Dialectics DAO is a decentralized platform leveraging **Quantum Cold Fusion Energy solutions** and **ethical redistribution frameworks** to drive sustainable energy applications. Our mission is to align technology with dharmic principles, fostering equitable resource distribution through innovative energy and governance protocols.

### Features
- **Energy Credit Marketplace**: Trade and redeem Quantum Cold Fusion energy credits.
- **Staking Mechanism**: Earn rewards by staking SQETokens.
- **Decentralized Governance**: Vote on proposals and shape the future of the DAO.
- **Quantum Cold Fusion Simulations**: Access advanced energy modeling services.

### Smart Contracts
1. **SQEToken**: ERC-20 token representing the primary currency of the ecosystem.
2. **EnergyCreditToken**: ERC-20 token for energy credit trading.
3. **Staking**: Contract for staking SQETokens and earning rewards.
4. **EnergyMarketplace**: Contract enabling energy credit purchases with ETH.

### Getting Started
#### Prerequisites
- Node.js (v16+)
- Hardhat CLI
- Metamask Wallet

#### Installation
```bash
# Clone the repository
git clone https://github.com/Shesha-Developer/Shesha-IDE.git

# Navigate to the directory
cd Shesha-IDE

# Install dependencies
npm install
```

#### Deployment
1. Configure your `.env` file:
   ```plaintext
   INFURA_API_KEY=<your_infura_api_key>
   DEPLOYER_PRIVATE_KEY=<your_wallet_private_key>
   ```

2. Compile and deploy:
   ```bash
   npx hardhat clean
   npx hardhat compile
   npx hardhat run scripts/deployContracts.js --network sepolia
   ```

### Documentation
- [Whitepaper](./docs/Whitepaper.md)
- [Governance](./docs/Governance.md)
- [Tokenomics](./docs/Tokenomics.md)

---
