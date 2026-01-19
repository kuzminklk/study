// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28

// This will only compile via IR
contract Coin {
	// The keyword "public" makes variables
	// accessible from other contracts
	address public minter;
	mapping(address => uint) public balances;

	// Events allow clients to react to specific
	// contract changes you declare
	event Sent(address from, address to, uint amount);

	// Constructor code is only run when the contract
	// is created
	constructor() {
		minter = msg.sender;
	}

	// Sends an amount of newly created coins to an address
	// Can only be called by the contract creator
	function mint(address reciver, uint amount) public {
		require(msg.sender == minter);
		balances[reciver] += amount;
	} 

	// Errors allow you to provide information about
	// why an operation failed. They are returned
	// to the caller of the function.
	error InsufficentBalance(uint requested, uint available);

	// Sends an amount of existing coins
	// from any caller to an address
	function send(address reciver, uint amount) public {
		require(amount <= balances[msg.sender], InsufficentBalance(amount, balances[msg.sender]));
		balances[msg.sender] -= amount;
		balances[reciver] += amount;
		emit Sent(msg.sender, reciver, amount);
	}

}
