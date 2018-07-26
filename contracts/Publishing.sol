pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';


/** @title Publishing contract */
contract Publishing is Ownable {

	/** @dev SafeMath used to prevent overflow when working with bytes.
	 * Using as a security precaution to avoid overflow attacks.
	 */
	using SafeMath for bytes32;

	/** @dev mapping bytes to bool and assigned to private variable proofs */
	mapping (bytes32 => bool) private proofs;


	/** @dev checks a bytes32 array and assigns the boolean true */
	function storeProof(bytes32 proof) private {
		proofs[proof] = true;
	}

	/** @dev checks a bytes32 array for boolean value
	 *  @return proofs[proof] as boolean true/false
	 */
	function hasProof(bytes32 proof) private view returns (bool) {
		return proofs[proof];
	}

	/** @dev turns a string into sha256 encoded byte array
	 *  @return sha256 encoded byte array
	 */
	function hashText(string text) private pure returns (bytes32) {
		return sha256(abi.encodePacked(text));
	}

	/** @dev onlyOwner of contract can save text into hash */
	function saveText(string text) public {
		bytes32 proof = hashText(text);
		storeProof(proof);
	}

	/** @dev checks the text of a string and if it has been hashes returns boolean */
	function checkText(string text) public view returns (bool) {
		bytes32 proof = hashText(text);
		return hasProof(proof);
	}

	/** @dev transfer contract to another owner */
    function _transferOwnership(address _newOwner) internal {
        require(_newOwner != address(0));
        emit OwnershipTransferred(owner, _newOwner);
        owner = _newOwner;
    }

    /** @dev if anyone calls this contract then the contract will self destruct */
    function killContract() public {
    	selfdestruct(owner);
    }
}
