

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19; 

import { Script } from "forge-std/Script.sol";
import { VRFCoordinatorV2_5Mock } from "@chainlink/contracts/src/v0.8/vrf/mocks/VRFCoordinatorV2_5Mock.sol";
import { LinkToken } from "test/mocks/LinkToken.sol";

contract Constants {
	// VRFCoordinator-mock values
	uint96 public MOCK_BASE_FEE = 0.001 ether;
	uint96 public MOCK_GAS_PRICE_LINK = 1e9;
	int256 public MOCK_WEI_PER_LINK = 4e15;

	uint256 public constant SUBSCRIPTION_FUND_AMOUT = 1 ether; // Equal 1 LINK

	uint256 constant ETH_SEPOLIA_CHAIN_ID = 11155111;
	uint256 constant ANVIL_CHAIN_ID = 31337;
}

contract HelperConfig is Script, Constants {

	error HelperConfig__InvalidChainId();

	struct NetworkConfig {
		uint256 entranceFee;
		uint256 interval;
		address vrfCoordinator;
		uint256 subscriptionId;
		bytes32 gasLane;
		uint32 callbackGasLimit;
		address linkTokenContract;
	}

	NetworkConfig public networkConfig;

	mapping(uint256 chainId => NetworkConfig) public networkConfigs;

	constructor () {
		networkConfigs[ETH_SEPOLIA_CHAIN_ID] = getSepoliaConfig();
		networkConfigs[ANVIL_CHAIN_ID] = getOrCreateAnvilConfig();
	}

	function getNetworkConfig() public view returns(NetworkConfig memory) {
		return getConfigByChainId(block.chainid);
	}

	function getConfigByChainId(uint256 chainId) public view returns(NetworkConfig memory) {
		if(networkConfigs[chainId].vrfCoordinator != address(0)) {
			return networkConfigs[chainId];
		} else {
			revert HelperConfig__InvalidChainId();
		}
	}

	function getSepoliaConfig() public pure returns(NetworkConfig memory) {
		return NetworkConfig({
			entranceFee: 0.01 ether, // 1e16
			interval: 30, // 30 seconds
			vrfCoordinator: 0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B,
			subscriptionId: 0,
			gasLane: 0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae,
			callbackGasLimit: 500000,
			linkTokenContract: 0x779877A7B0D9E8603169DdbD7836e478b4624789
		});
	}

	function getOrCreateAnvilConfig() public returns(NetworkConfig memory) {
		
		if(networkConfig.vrfCoordinator != address(0)) {
			return networkConfig;
		}

		vm.startBroadcast();
			VRFCoordinatorV2_5Mock vrfCoordinatorMock = new VRFCoordinatorV2_5Mock(MOCK_BASE_FEE, MOCK_GAS_PRICE_LINK, MOCK_WEI_PER_LINK);
			LinkToken linkTokenContract = new LinkToken();
		vm.stopBroadcast();

		return NetworkConfig({
			entranceFee: 0.01 ether, // 1e16
			interval: 30, // 30 seconds
			vrfCoordinator: address(vrfCoordinatorMock),
			subscriptionId: 0,
			gasLane: 0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae,
			callbackGasLimit: 500000,
			linkTokenContract: address(linkTokenContract)
		});
	}

}