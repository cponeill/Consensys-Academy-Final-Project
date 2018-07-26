# Final Project Contract Design

The Solidity contract itself is extremely simple and was created to be that way.

* Problem?
    * How can a user easily verify that a piece of text was attributed to them?
* Solution?
    * Hash the text and submit a true or false to verify if the text was submitted.

## High Level Overview

The `Publishing Contract` serves as an easy way to `verify` that some text has been sent to the Ethereum Blockchain. This project is not on the mainnet and instead uses the Rinkeby testnet. Both the `SafeMath` and `Ownable` Libraries were imported using [OpenZeppelin](https://openzeppelin.org/) and were used for security and ease of use. The design patterns were chosen for two reasons
  * Ease of use for actual design and creation of the contract.
  
  * The importance of learning how make a smart contract interact with a front end interface. It would be easy to get lost with a very complicated contract. The simplicity was chosen to better understand how those interactions work.
  

## Publishing Contract Data Structure

* ***saveText(string)*** - Takes a string, hashes it using the hashText function, and stores the output (`proof`) in the storeProof function.

* ***hashText(proof)*** - Hashes a string using the sha256 algorithm.

* ***storeProof(proof)*** - Stores and returns a boolean output.

* ***hasProof(proof)*** - Inputs a byte array and outputs a boolean value.

* ***checkText(string)*** - Takes a string, hashes it using the hashText function, and ouputs the storeProof function.

* ***transferOwnership(address)*** - Takes a new address and transfers ownership of the contract to that address.

* ***killContract()*** - Self destructs the contract if something goes wrong and acts as a kill switch.

```
function saveText(string text) public onlyOwner {
  bytes32 proof = hashText(text);
  storeProof(proof);
}


function hashText(string text) private pure returns (bytes32) {
  return sha256(abi.encodePacked(text));
}


  function storeProof(bytes32 proof) private {
  proofs[proof] = true;
}


function hasProof(bytes32 proof) private view returns (bool) {
  return proofs[proof];
}


function checkText(string text) public view returns (bool) {
  bytes32 proof = hashText(text);
  return hasProof(proof);
}


function _transferOwnership(address _newOwner) internal {
    require(_newOwner != address(0));
    emit OwnershipTransferred(owner, _newOwner);
    owner = _newOwner;
}
  
  
  function killContract() public {
  selfdestruct(owner);
}
```
