pragma solidity 0.8.17;

contract Project {
    uint256 public project_goal;
    uint256 public current_amount;
    address payable public project_address;
    mapping(address => uint256) public donations;
    address[] public donators;

    constructor(uint256 _project_goal) {
        project_goal = _project_goal;
    }

    function totalDonated() external view returns (uint256) {
        return current_amount;
    }

    function donate() external payable {
        require(msg.value >= 0, "Not enough tokens");

        // Transfer the amount.
        donations[msg.sender] += msg.value;
        donators.push(msg.sender);

        current_amount += msg.value;
        if (current_amount >= project_goal) {
            releaseFunds();
        }
    }

    function getNumberOfDonors() external view returns (uint256) {
        return donators.length;
    }

    function balanceOfProject() public view returns (uint256) {
        return address(this).balance;
    }

    function releaseFunds() private {
        project_address.transfer(current_amount / 2);
    }
}
