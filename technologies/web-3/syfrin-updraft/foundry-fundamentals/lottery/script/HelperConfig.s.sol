

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19; 

import { Script } from "forge-std/Script.sol";
import { VRFCoordinatorV2_5Mock } from /@chainlink/contracts/src/v0.8/vrf/mocks/VRFCoordinatorV2_5Mock.sol


contract HelperConfig is Script {

	error HelperConfig__InvalidChainId();

	uint256 constant ETH_SEPOLIA_CHAIN_ID = 11155111;
	uint256 constant LOCAL_CHAIN_ID = 31337;

	struct NetworkConfig {
		uint256 entranceFee;
		uint256 interval;
		address vrfCoordinator;
		uint256 subscriptionId;
		bytes32 gasLane;
		uint32 callbackGasLimit;
	}

	NetworkConfig public networkConfig;

	mapping(uint256 chainId => NetworkConfig) public networkConfigs;

	constructor () {
		networkConfigs[ETH_SEPOLIA_CHAIN_ID] = getSepoliaConfig();
		networkConfigs[LOCAL_CHAIN_ID] = getOrCreateAnvilConfig();
	}

	function getConfigByChainId(uint256 chainId) public view returns(NetworkConfig memory) {
		if(networkConfigs[chainId].vrfCoordinator != address(0)) {
			return networkConfigs[chainId]
		} else {
			revert HelperConfig__InvalidChainId();
		}
	}

	function getSepoliaConfig() public view returns(NetworkConfig memory) {
		return NetworkConfig({
			entranceFee: 0.01 ether, // 1e16
			interval: 30, // 30 seconds
			vrfCoordinator: 0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B,
			subscriptionId: 0,
			gasLane: 0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae,
			callbackGasLimit: 500000
		});
	}

	function getOrCreateAnvilConfig() public returns(NetworkConfig memory) {
		
		if(networkConfig.vrfCoordinator != address(0)) {
			return networkConfig;
		}
	}

}