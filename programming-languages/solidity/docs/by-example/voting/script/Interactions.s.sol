

// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import { Script } from "forge-std/Script.sol";
import { Ballot } from "src/Voting.sol";
import { DevOpsTools } from "../lib/foundry-devops/src/DevOpsTools.sol";


contract GiveRightToVote is Script {
	function run(address voter) public {
		address mostRecentlyDeployedBallot = DevOpsTools.get_most_recent_deployment("Ballot", block.chainid);

		vm.startBroadcast();
			giveRightToVote(mostRecentlyDeployedBallot, voter);
		vm.stopBroadcast();
	}

	function giveRightToVote(address ballotAddress, address voter) public {
		Ballot(payable(ballotAddress)).giveRightToVote(voter);
	}
}



contract Vote is Script {
	function run(uint proposal) public {
		address mostRecentlyDeployedBallot = DevOpsTools.get_most_recent_deployment("Ballot", block.chainid);

		vm.startBroadcast();
			vote(mostRecentlyDeployedBallot, proposal);
		vm.stopBroadcast();
	}

	function vote(address ballotAddress, uint proposal) public {
		Ballot(payable(ballotAddress)).vote(proposal);
	}
}