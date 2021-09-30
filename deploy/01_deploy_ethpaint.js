const { ethers } = require("hardhat")
let {networkConfig} = require('../helper-hardhat-config')

module.exports = async({
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    const ETHPaint = await deploy("ETHPaint", {
        from: deployer
    })
    log(`Deployed contract to ${ETHPaint.address}`)

    /// FULL TEST DEPLOYMENT
    const ethPaintContract = await ethers.getContractFactory("ETHPaint")
    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    const ethPaint = new ethers.Contract(ETHPaint.address, ethPaintContract.interface, signer)
    const networkName = networkConfig[chainId]['name']
    log(`Verify with: \n npx hardhat verify --network ${networkName} ${ETHPaint.address}`)

    let tx1 = await ethPaint.create()
    await tx1.wait(1)
    let tx2 = await ethPaint.paint(0, [
        "rgb(126,211,33)", "rgb(126,211,33)", "rgb(184,233,84)", "rgb(123,243,216)",
        "rgb(126,211,33)", "rgb(184,233,84)", "rgb(126,211,33)", "rgb(184,233,84)",
        "rgb(184,233,84)", "rgb(123,243,216)", "rgb(184,233,84)", "rgb(123,243,216)",
        "rgb(123,243,216)", "rgb(126,211,33)", "rgb(184,233,84)", "rgb(123,243,216)"
    ])
    await tx2.wait(1)
    log(`it worked`)
    log(`Token URI : ${await ethPaint.tokenURI(0)}`)

    tx3 = await ethPaint.create()
    await tx3.wait(1)
    let tx4 = await ethPaint.paint(1, [
        "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)",
        "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)",
        "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)",
        "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)",
    ])
    await tx4.wait(1)

    log(`Success!`)
    log(`You can view the tokenURI here ${await ethPaint.tokenURI(1)}`)

    let tx5 = await ethPaint.preserve(0,{value:ethers.utils.parseEther(".2")})
    await tx5.wait(1)
    let tx7 = await ethPaint.withdraw();
    await tx7.wait(1)

    log(`ready for fail`)

    let tx6 = await ethPaint.paint(0, [
        "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)",
        "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)",
        "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)",
        "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)",
    ])
    await tx6.wait(1)
} 