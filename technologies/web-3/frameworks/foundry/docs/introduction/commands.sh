
# Forked local chain
anvil --fork-url https://eth.merkle.io

# Read balance
cast balance vitalic.eth --ether --rpc-url https://eth.merkle.io

# Get latest block number
cast block-number --rpc-url https://eth.merkle.io

# Call a contract function (read)
cast call 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 "totalSupply()" --rpc-url https://eth.merkle.io

# Send a transaction (write)
cast send 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --value 100ether --account anvil-1 --rpc-url anvil

# Create remappings
forge remappings