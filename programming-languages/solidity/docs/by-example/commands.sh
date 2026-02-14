
# Deploy the contract to Sepolia testnet and verify it on Etherscan
forge script script/Deploy.s.sol:Deploy --rpc-url sepolia --account development-0 --verify --broadcast

# Give the right to vote to a voter
forge script script/Interactions.s.sol:GiveRightToVote 0x52F49A46f11fEd55d3cD9F96B52902a661e08Ca8 --rpc-url sepolia --account development-0 --broadcast

# Vote for the proposal with index
forge script script/Interactions.s.sol:Vote 0 --rpc-url sepolia --account development-1 --broadcast