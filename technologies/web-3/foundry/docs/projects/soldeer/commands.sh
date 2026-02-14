
# Deploy via script
forge script script/Counter.s.sol --broadcast --rpc-url sepolia --account development-0

# Use soecific profile
FOUNDRY_PROFILE=production forge build

# Inspect
forge inspect Counter abi
forge inspect Counter bytecode
forge inspect Counter storage-layout

# Run specific test
forge test --match-test test_Increment -vvvv
forge test --match-contract ComplicatedContractTest
forge test --match-path test/ContractB.t.sol
forge test --match-contract ComplicatedContractTest --match-test test_Deposit
forge test --no-match-test test_Skip

# Verify contract
FOUNDRY_PROFILE=production forge verify-contract 0x395157d61e799dF5f5DBBAb8A6cb237A60f0731E --rpc-url sepolia