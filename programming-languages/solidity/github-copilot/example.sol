// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Example {
		string public name;
		uint256 public value;

		constructor(string memory _name, uint256 _value) {
				name = _name;
				value = _value;
		}

		function setName(string memory _name) public {
				name = _name;
		}

		function setValue(uint256 _value) public {
				value = _value;
		}
}