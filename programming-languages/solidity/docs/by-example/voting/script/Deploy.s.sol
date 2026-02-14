

// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import { Script } from "forge-std/Script.sol";
import { Ballot } from "src/Voting.sol";


contract Deploy is Script {
	function run() public {
		deploy();
	}

	function deploy() public {
		vm.startBroadcast();
			bytes32[] memory proposals = new bytes32[](1);
			proposals[0] = bytes32("Build the tower!");
			Ballot ballot = new Ballot(proposals);
		vm.stopBroadcast();
	}
}