pragma solidity^0.4.21;

contract sample {
    uint public id;

    function setId(uint _id) public {
        id = _id;
    }

    function getId() public view returns (uint) {
        return id;
    }
}