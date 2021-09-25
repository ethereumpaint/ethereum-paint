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

    log("-----------------------------")
    const ETHPaint = await deploy("ETHPaintPro", {
        from: deployer,
        log: true
    })
    log(`Deployed contract to ${ETHPaint.address}`)

    const ethPaintContract = await ethers.getContractFactory("ETHPaintPro")
    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    const ethPaint = new ethers.Contract(ETHPaint.address, ethPaintContract.interface, signer)
    const networkName = networkConfig[chainId]['name']
    log(`Verify with: \n npx hardhat verify --network ${networkName} ${ETHPaint.address}`)

    let tx1 = await ethPaint.create()
    await tx1.wait(1)
    // test 4x4
    let tx2 = await ethPaint.paint(0, [
        "rgb(126,211,33)", "rgb(126,211,33)", "rgb(184,233,84)", "rgb(123,243,216)",
        "rgb(126,211,33)", "rgb(184,233,84)", "rgb(126,211,33)", "rgb(184,233,84)",
        "rgb(184,233,84)", "rgb(123,243,216)", "rgb(184,233,84)", "rgb(123,243,216)",
        "rgb(123,243,216)", "rgb(126,211,33)", "rgb(184,233,84)", "rgb(123,243,216)"
    ])
    await tx2.wait(1)
    log(`Success!`)
    log(`You can view the tokenURI here ${await ethPaint.tokenURI(0)}`)
    tx3 = await ethPaint.create()
    await tx3.wait(1)
    log(`I HAVE ${await ethPaint.balanceOf('0xf90C5B8571E762b561Dc6f354648e3203dcC103A')}`)
    tx4 = await ethPaint.create()
    await tx4.wait(1)
} 