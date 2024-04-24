const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("First", function () {


    

 
    it("checking it brother", async function () {
      const First = await ethers.getContractFactory("First");
    const first = await First.deploy();
      // console.log(first);
    
     
     expect ("Aa").to.equal("Aa");
    });
           
  
    

  
});
