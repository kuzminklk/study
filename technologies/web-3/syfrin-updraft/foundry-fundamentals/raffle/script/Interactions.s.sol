

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19; 

import { Script, console } from "forge-std/Script.sol";
import { HelperConfig } from "script/HelperConfig.s.sol";
import { VRFCoordinatorV2_5Mock } from "@chainlink/contracts/src/v0.8/vrf/mocks/VRFCoordinatorV2_5Mock.sol";


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


contract FundSubscription is Script {
	uint256 public constant FUND_AMOUT = 1 ether; // 1 LINK

	function run() public {

	}

	function fundSubscritionUsingConfig() public {
		HelperConfig helperConfig = new HelperConfig();
		HelperConfig.NetworkConfig memory networkConfig = helperConfig.getNetworkConfig();
		address vrfCoordinator = networkConfig.vrfCoordinator;
		uint256 subscriptionId = networkConfig.subscriptionId;
		address linkToken = networkConfig.linkTokenContract;
	}

}