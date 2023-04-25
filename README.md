# Chess Game
Chess Game Decentralize Application (EVM)

### Environment variables
- **`ALCHEMY_API_KEY`** - Alchemy API key
- **`ETHERSCAN_API_KEY`** - Etherscan API key
- **`COINMARKETCAP_API_KEY`** - CoinMarketCap API key

### Commands
- **`npm run format`** - for run formatting code
- **`npm run lint`** - for run linting code
- **`npm run format:check`** - for check format code
- **`npm run lint:check`** - for check lint code

### Plugins
- **`npx hardhat node`** - for running localhost node
- **`npx hardhat docgen`** - for generate contract docs
- **`npx hardhat abigen`** - for generate contract ABI files
- **`npx hardhat marger`** - for generate marged contracts
- **`npx hardhat compile`** - for compile all contracts
- **`npx hardhat deploy`** - for deploy all contracts
- **`npx hardhat test`** - for run all tests
- **`npx hardhat check`** - for check all contracts
- **`npx hardhat clean`** - for clean artifacts

### Tools
- **`npx hardhat verify`** - for verify contract
  Options:
  - `network` - chain name (_required_)
  - `contract-address` - deployed contract address (_required_)

### Scripts
```bash
npx ts-node scripts/deploy.script.ts \
  --provider-url <PROVIDER_URL> \
  --private-key <DEPLOYER_PRIVATE_KEY> \
  --args <JSON_ARGS> \
  --abi-path <PATH_TO_ABI> \
  --bytecode-path <PATH_TO_BYTECODE>
```
