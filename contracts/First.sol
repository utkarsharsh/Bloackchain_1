// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract First {
   address payable  owner;
   struct paisa {
    string name;
    string message;
     uint amount;
    address from;
    uint timestamps;
   }
   constructor(){
    owner=payable (msg.sender);
   }
 paisa [] data;

 event declare(string name,uint value);

   function takepaise(string memory name,string memory message) public payable {
    require(msg.value>0,"send me money greater than 0 ether");
    
      data.push(paisa(name,message,msg.value,msg.sender,block.timestamp));
      emit declare (name,msg.value);
   }
   
   function showpaisa() public view returns(paisa[] memory){
return data;
   }
}