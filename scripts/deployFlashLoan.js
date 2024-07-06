const hre = require("hardhat")
require("dotenv").config();

console.log(process.env.PRIVATE_KEY)

async function main() {
    const flashLoanFactory = await hre.ethers.getContractFactory("FlashLoan");
    const FlashLoan = await flashLoanFactory.deploy(
        '0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A'
    );

    await FlashLoan.deployed()
    console.log("Flash loan contract deployed: ", FlashLoan.target)
}

main().catch(e => {
    console.error(e);
    process.exitCode = 1;
})