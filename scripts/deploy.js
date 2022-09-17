const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Contract = await ethers.getContractFactory("MultiSig");

    const multiSig = await Contract.deploy();
  
    console.log("Contract address:", multiSig.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });