// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Bank {
    mapping(address => uint) public balanceOf;

    event Deposit(address indexed user, uint amoung);

    function depositETH() external payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        balanceOf[msg.sender] += msg.value;

        emit Deposit(msg.sender, msg.value);
    }
}