Smart Contract Deployment Guide (Hardhat + Foundry)
This repo shows how to deploy and verify Solidity contracts on both:

🟣 Sepolia Testnet (Ethereum)

🟡 Core Testnet (TCORE2)

using two tools:

🛠️ Hardhat

⚙️ Foundry

📁 What's Inside
This project includes:

✅ Smart contracts (/contracts)

✅ Deployment scripts

✅ Hardhat configuration (hardhat.config.js)

✅ Foundry configuration (foundry.toml)

✅ .env file support for secrets

✅ Contract verification setup

🔐 Environment Setup
Before doing anything, create a .env file with the following:

PRIVATE_KEY=your_wallet_private_key
ETHSEPHOLIA_URL_KEY=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
ETHERSCAN_KEY=your_etherscan_api_key
COREDAO_URL_KEY=https://rpc.test.btcs.network
CORESCAN_KEY=your_corescan_api_key (if supported)
⚠️ Use test wallets only. Never expose real private keys.

🚀 Hardhat Deployment
🔹 Where to Look
Network settings: hardhat.config.js

Deployment logic: scripts/deploy.js

Verification logic: Run via CLI (npx hardhat verify)

🔹 How It Works
Contracts are deployed using PRIVATE_KEY to either Sepolia or Core.

RPC URLs are loaded from .env.

For Sepolia, contract verification uses Etherscan’s API.

Core Testnet may require custom verification setup (see Hardhat's docs).

🔹 Commands to Run
npx hardhat run scripts/deploy.js --network sepolia
npx hardhat verify --network sepolia <contract_address>

npx hardhat run scripts/deploy.js --network core

📌 Note: Core Testnet verification may fail due to missing support in Hardhat plugins. Explore manual verification if needed.

⚙️ Foundry Deployment
🔸 Where to Look
Settings: foundry.toml

Deployment command: forge create

Verification command: forge verify-contract

🔸 How It Works
Similar to Hardhat: uses .env for secrets and RPC URLs.

Deployment happens directly via command line.

Sepolia verification works out of the box.

Core Testnet needs custom --verifier-url and --chain-id.

🔸 Commands to Run
forge create --rpc-url $ETHSEPHOLIA_URL_KEY --private-key $PRIVATE_KEY src/Storage.sol:Storage
forge verify-contract --chain sepolia <address> src/Storage.sol:Storage

forge create --rpc-url $COREDAO_URL_KEY --private-key $PRIVATE_KEY src/Storage.sol:Storage
forge verify-contract --verifier-url https://scan.test.btcs.network --chain-id 1114 --etherscan-api-key $CORESCAN_KEY <address> src/Storage.sol:Storage

⚠️ Foundry errors like Chain #1116 does not have a contract... often mean you're trying to verify on the wrong chain ID or with an unsupported explorer.

📘 Want to Understand More?
Here’s what each tool is doing:

Hardhat handles deployments using scripts in JavaScript and has built-in Etherscan integration.

Foundry is more CLI-driven and works best for Solidity-native devs.

Verification submits the source code to an explorer (Etherscan, Corescan) to make the contract transparent.

Sepolia is well supported, while Core Testnet (1114) may need manual explorer configuration or may not support verification consistently.

🧵 Final Tips
This repo gives you working deploy/verify logic for two networks and two toolchains.

You can switch tools based on your preference (JS/TS vs Solidity-native).

If Core Testnet verification fails, double-check:

Chain ID is 1114

The contract is actually deployed

You are using the correct API/explorer URL

📎 Useful Links
Hardhat Docs : https://hardhat.org/docs

Foundry Book : https://book.getfoundry.sh/

Sepolia Etherscan : https://sepolia.etherscan.io/

Core Testnet Explorer : https://scan.test.btcs.network
