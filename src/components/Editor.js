import React, {useState} from "react";
import "../styles/editor.scss";
import { PhotoshopPicker} from "react-color";
import DrawingPanel from "./DrawingPanel";
import Explore from "./Explore";
import { ethers } from "ethers";

export default function Editor() {
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [hideExplore, setHideExplore] = useState(true);
    const [hideAbout, setHideAbout] = useState(false);
    const [hidePreserve, setHidePreserve] = useState(false);
    const [buttonText, setButtonText] = useState("paint");
    const [selectedColor, setColor] = useState("#f44336");
    const [ethAccount, setAccount] = useState("");
    const [canvasId, setCanvasId] = useState(0);

    const rinkebyContractAddress = "0x8c96Ea3019Cb34ac08543aaFc3cAe29C497E5ee2"
    const mainnetContractAddress = "0x811E245B74Fa05A6514723EAd75157f2F26a2cB5"
    const epABI = [
        "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
        "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
        "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
        "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
        "function addressToString(address _addr) pure returns (string)",
        "function approve(address to, uint256 tokenId)",
        "function balanceOf(address owner) view returns (uint256)",
        "function buildImgURI(bytes svg) pure returns (bytes)",
        "function buildTokenURI(bytes imageURI, uint256 tokenId, bool newCanvas) view returns (string)",
        "function create()",
        "function fee() view returns (uint256)",
        "function getApproved(uint256 tokenId) view returns (address)",
        "function isApprovedForAll(address owner, address operator) view returns (bool)",
        "function isFrozen(uint256) view returns (bool)",
        "function iterations(uint256) view returns (uint256)",
        "function name() view returns (string)",
        "function owner() view returns (address)",
        "function ownerOf(uint256 tokenId) view returns (address)",
        "function paint(uint256 tokenId, string[] colors)",
        "function preserve(uint256 tokenId) payable",
        "function renounceOwnership()",
        "function safeTransferFrom(address from, address to, uint256 tokenId)",
        "function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)",
        "function setApprovalForAll(address operator, bool approved)",
        "function setFreezeFee(uint256 newFee)",
        "function sizeStrings(uint256) view returns (string)",
        "function supportsInterface(bytes4 interfaceId) view returns (bool)",
        "function symbol() view returns (string)",
        "function tokenCounter() view returns (uint256)",
        "function tokenIdString(uint256) view returns (string)",
        "function tokenURI(uint256 tokenId) view returns (string)",
        "function transferFrom(address from, address to, uint256 tokenId)",
        "function transferOwnership(address newOwner)",
        "function withdraw()"
      ]
    

    async function requestAccount() {
        console.log("req acc")
        let web3 = window.ethereum
        console.log(web3.isConnected())
        const accounts = await web3.request({ method: 'eth_requestAccounts' });
        console.log(accounts)
        setAccount(accounts[0])
    }

    async function mintCanvas() {
        if (typeof window.ethereum !== 'undefined') {
        await requestAccount()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(mainnetContractAddress, epABI, signer)
        const transaction = await contract.create()
        await transaction.wait()
        }
    }

    async function paintCanvas(tokenId, colors) {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner()
            const contract = new ethers.Contract(mainnetContractAddress, epABI, signer)
            const transaction = await contract.paint(tokenId, colors, {gasLimit:1400000})
            await transaction.wait()
        }
    }

    async function preserveCanvas() {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner()
            const contract = new ethers.Contract(mainnetContractAddress, epABI, signer)
            const transaction = await contract.preserve(canvasId, {value:ethers.utils.parseEther(".2"), gasLimit:55000})
            await transaction.wait()
        }
    }
    
    function handleId(event) {
        setCanvasId(event.target.valueAsNumber)
    }
    
    function initializeDrawingPanel() {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "paint" 
            ? setButtonText("reset") 
            : setButtonText("paint");
    }
    
    function initializeAbout() {
        setHideAbout(!hideAbout)
    }

    function initializePreserve() {
        setHidePreserve(!hidePreserve)
    }

    function changeColor(color) {
        setColor(color.hex);
    }

    return <div id="editor">
        <header><ul id="nav"><li><a href="#">Ethereum Paint</a></li><li><a href="#" onClick={requestAccount}>{ethAccount ? ethAccount : "Connect Wallet"}</a></li></ul></header>
        <div className="buttonGroup">
            <button onClick={mintCanvas}>
                mint a canvas
            </button>
            <button onClick={initializeDrawingPanel}>
                {buttonText}
            </button>
            <button onClick={initializePreserve}>
                preserve painting
            </button>
            <button onClick={initializeAbout}>
                about
            </button>
        </div>
        <div>
            {hideAbout && (
                <ul className="about">
                    <li><a href="https://etherscan.io/address/0x811e245b74fa05a6514723ead75157f2f26a2cb5">etherscan</a></li>
                    <li><a href="https://opensea.io/collection/ethereum-paint-4x4">opensea</a></li>
                    <li><a href="https://discord.gg/AXbjY5qvWZ">discord</a></li>
                </ul>
            )}
        </div>
        <div>
            {hidePreserve && (
                <form>
                    <label>
                        canvas id:   
                        <input type="number" defaultValue={canvasId} onChange={(e)=>handleId(e)}></input>
                    </label>
                    <input type="button" value="submit" onClick={preserveCanvas}/>
                </form>
            )}
        </div>
        <div id="canvas">
            {hideOptions && (
                <DrawingPanel selectedColor={selectedColor} paintCanvas={paintCanvas}/>
            )}
            {hideOptions && (
                <PhotoshopPicker color={selectedColor} className="colorPicker" onChangeComplete={changeColor}/>
            )}
        </div>
        {hideExplore && (<Explore epABI={epABI} epAddress={mainnetContractAddress}/>)}
    </div>
}