

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19; 

import { Script, console } from "forge-std/Script.sol";
import { HelperConfig, Constants } from "script/HelperConfig.s.sol";
import { VRFCoordinatorV2_5Mock } from "@chainlink/contracts/src/v0.8/vrf/mocks/VRFCoordinatorV2_5Mock.sol";
import { LinkToken } from "test/mocks/LinkToken.sol";


contract CreateSubscription is Script {
	function run() public {
		createSubscriptionUsingConfig();
	}

	function createSubscriptionUsingConfig() public returns(uint256, address) {
		HelperConfig helperConfig = new HelperConfig();
		address vrfCoordinator = helperConfig.getNetworkConfig().vrfCoordinator;

		return createSubscription(vrfCoordinator);
	}

	function createSubscription(address vrfCoordinator) public returns(uint256, address) {
		console.log("Creating subscription on chain Id: ", block.chainid);

		vm.startBroadcast();
			uint256 subscriptionId = VRFCoordinatorV2_5Mock(vrfCoordinator).createSubscription();
		vm.stopBroadcast();

		console.log("Your subscription Id is: ", subscriptionId);

		return(subscriptionId, vrfCoordinator);
	}
}


contract FundSubscription is Script, Constants {

	function run() public {
		fundSubscritionUsingConfig()
	}

	function fundSubscritionUsingConfig() public {
		HelperConfig helperConfig = new HelperConfig();
		HelperConfig.NetworkConfig memory networkConfig = helperConfig.getNetworkConfig();
		address vrfCoordinator = networkConfig.vrfCoordinator;
		uint256 subscriptionId = networkConfig.subscriptionId;
		address linkTokenContract = networkConfig.linkTokenContract;
		fundSubscription(vrfCoordinator, subscriptionId, linkTokenContract);
	}

	function fundSubscription(address vrfCoordinator, uint256 subscriptionId, address linkTokenContract) public {
		console.log("Funding subscription: ", subscriptionId);
		console.log("Using vrfCoordinator: ", vrfCoordinator);
		console.log("On chain id", block.chainid);

		if(block.chainid == ANVIL_CHAIN_ID) {
			vm.startBroadcast();
			VRFCoordinatorV2_5Mock(vrfCoordinator).fundSubscription(subscriptionId, SUBSCRIPTION_FUND_AMOUT);
			vm.stopBroadcast();
		} else {
			vm.startBroadcast();
			LinkToken(linkTokenContract).transferAndCall(vrfCoordinator, SUBSCRIPTION_FUND_AMOUT, abi.encode(subscriptionId));
		}
	}
}


contract AddConsumer is Script {
	function run() {

	}
}