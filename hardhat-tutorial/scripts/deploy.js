const { ethers }  = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  const deployedWhitelistContract = await whitelistContract.deploy(10);
  
<<<<<<< HEAD
=======

>>>>>>> 89bd03673eb50481a2e74a646a1948cf8d593ddd
  console.log("Whitelist Contract Address:",deployedWhitelistContract.address);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
