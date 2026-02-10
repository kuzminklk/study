

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19; 

import { Test } from "forge-std/Test.sol";
import { Raffle } from "src/Raffle.sol";
import { DeployRaffle } from "script/DeployRaffle.s.sol";
import { HelperConfig } from "script/HelperConfig.s.sol";

contract RaffleTest is Test {
	Raffle public raffle;
	HelperConfig public helperConfig;
	HelperConfig.NetworkConfig public networkConfig;

	uint256 constant SEND_VALUE = 0.1 ether;
	uint256 constant STARTING_BALANCE = 10 ether;
	address immutable USER = makeAddr("user");

	function setUp() external {
		DeployRaffle deployer = new DeployRaffle();
		(raffle, helperConfig) = deployer.deployContract();
		networkConfig = helperConfig.getNetworkConfig();
	}

	function testRaffleInitializesInOpenState()	public view {
		assert(raffle.getRaffleState() == Raffle.RaffleState.OPEN);
	}


	/* —————— Enter Raffle —————— */

	function testRaffleRevertsWhenUserPayNotEnough() public {
		// Arrange
		vm.prank(USER);

		// Act / Assert
		vm.expectRevert(Raffle.Raffle__NotEnoughEthToEnterRaffle.selector);
		raffle.enterRaffle();
	}

	function testRaffleRecordsPlayersWhenTheyEnter() public {
		// Arrange
		vm.prank(USER);

		// Act
		raffle.enterRaffle{value: networkConfig.entranceFee}();

		// Assert
		assert(USER == raffle.getPlayer(0));
	}

}