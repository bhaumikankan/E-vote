// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Voteing{
    
    constructor(){
        manager=msg.sender;
        voteStart=false;
        registerStart=false;
    }
    
    struct Application{
       string votercardNumber;
       string AdarcardNumber;
       address govtRegisterAddress;
       bool isApproved;
       
    }
    
    struct Candidate{
        string name;
        string partyName;
        uint voteCount;
    }
    
    address public manager;
    bool public voteStart;
    bool public registerStart;
    mapping(address=>bool) public registerVoter;
    Application[] public applications;
    Candidate[] public candidates;
    mapping(address=>bool) public completeVoters;
    uint public totalApprovers;
    
    
    
    //Register applications
    function Register(string memory v,string memory a,address g) public {
        require(registerStart,"Registration not start ");
        require(registerVoter[g]==false,"You already register successfully");
        Application memory newApplication=Application(v,a,g,false);
        applications.push(newApplication);
    }
    
    //get all applications
    function getAllapplications() public view returns(Application[] memory){
        return applications;
    }
    
    //approve applications
    function approveApplication(uint index) public {
        require(msg.sender==manager,"you are not an admin");
        address newcandidate=applications[index].govtRegisterAddress;
        applications[index].isApproved=true;
        registerVoter[newcandidate]=true;
        totalApprovers++;
    }
    
    //add new Candidate for vote
    function addCandidate(string memory n,string memory pn) public{
        require(msg.sender==manager,"you are not an admin");
        Candidate storage newcandidate=candidates.push();
        newcandidate.name=n;
        newcandidate.partyName=pn;
        newcandidate.voteCount=0;
    }
    
    //vote a Candidate
    function vote(uint index) public{
        require(voteStart,"vote not start yet");
        require(registerVoter[msg.sender],"you are not a register voter");
        require(completeVoters[msg.sender]==false,"your vote is already complete");
        Candidate storage candidate=candidates[index];
        candidate.voteCount++;
        completeVoters[msg.sender]=true;
    }
    
    //get all candidates
    function getAllcandidates() public view returns(Candidate[] memory){
        return candidates;
    }
    
    
    //manage vote and register status
    function startRegistration() public{
        require(msg.sender==manager,"you are not an admin");
        registerStart=true;
    }
    
    function stopRegistration() public{
        require(msg.sender==manager,"you are not an admin");
        registerStart=false;
    }
    
    function startVoteing() public{
        require(msg.sender==manager,"you are not an admin");
        voteStart=true;
    }
    
    function stopVoteing() public{
        require(msg.sender==manager,"you are not an admin");
        voteStart=false;
    }
    
    
}
