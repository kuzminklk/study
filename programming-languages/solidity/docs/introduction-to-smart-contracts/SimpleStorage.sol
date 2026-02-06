// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28

contract Storage {
	uint storedData;

	function Set(uint x) public {
		storedData = x;
	}

	function get() public view returns(uint) {
		return storedData;
	}
}