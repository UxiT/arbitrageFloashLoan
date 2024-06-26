const hre = require("hardhat");

async function main() {
    const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
    const flashLoan = await FlashLoan.deploy("0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A");

    console.log("Flash loan contract deployed: ", flashLoan.target)
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})