

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19; 

import { Script } from "forge-std/Script.sol";
import { Raffle } from "src/Raffle.sol";
import { HelperConfig } from "script/HelperConfig.s.sol";


contract DeployRaffle is Script {

	function run() public {

	}

	function deployContract() public returns(Raffle, HelperConfig) {
		HelperConfig configContract = new HelperConfig();
		/* 
		For local (Anvil): deploy mocks, get local config.
		For Sepolia: get Sepolia config.
		*/
		HelperConfig.NetworkConfig memory networkConfig = configContract.getNetworkConfig();

		vm.startBroadcast();
			Raffle raffle = new Raffle(
				networkConfig.entranceFee,
				networkConfig.interval,
				networkConfig.vrfCoordinator,
				networkConfig.subscriptionId,
				networkConfig.gasLane,
				networkConfig.callbackGasLimit
			);
		vm.stopBroadcast();
		return(raffle, configContract);
	}
}

