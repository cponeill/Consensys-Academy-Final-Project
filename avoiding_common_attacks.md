# Final Project Security Implementations

Since the Solidity contract was designed to be as simple as possible, the security that was used was simple as well. It can be easy to make mistakes when programming a smart contract and these mistakes can go unnoticed. The smart contract code was tested for logic bugs in the following ways:

## Logic Bugs

  * Following strict Soldity coding standards.
  * Avoiding complex rules and that guide the contract and using a complicated implementation.
  * Running unit tests to make sure the code does what it is supposed to be doing.
  

## Integer Arithmetic Overflow

  * Implemented the `SafeMath` library to prevent overflows when working `uint`.


## Exposed Functions

  * Audited any functions to determine which should be accessible to anyboy working with the contract and which should only be accessible to the contract owner.
      * The `_transferOwnership(address)` function was found to only be needed by the owner of the contract.
