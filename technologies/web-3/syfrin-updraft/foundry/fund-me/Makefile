
-include .env

build:; forge build

deploy-sepolia:
	forge script script/Deploy.s.sol --rpc-url sepolia --broadcast --account development --verify --etherscan-api-key ${ETHERSCAN_API_KEY}