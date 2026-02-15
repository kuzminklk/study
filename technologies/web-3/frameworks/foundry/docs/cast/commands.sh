
# Check block number
cast block-number --rpc-url sepolia

# Read storage
cast call $CONTRACT "balanceOf(address)" $ADDRESS

# Send transaction
cast send $CONTRACT "transfer(address,uint256)" $TO $AMOUNT --private-key $KEY

# Decode calldata
cast 4byte-decode

# Read balance
cast balance $ADDRESS

# Check base fee
cast base-fee --rpc-url sepolia

# Resolve ENS
cast resolve-name vitalik.eth