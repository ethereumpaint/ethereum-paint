// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ETHPaintPro is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    uint256 public fee;
    mapping(uint256 => bool) public isFrozen;
    mapping(uint256 => string) public tokenIdString;
    mapping(uint256 => uint256) public iterations;
    mapping(uint256 => string) public sizeStrings;

    event CreatedCanvas(uint256 indexed tokenId, string tokenURI);
    event PaintedCanvas(uint256 indexed tokenId, string tokenURI);
    event PermanentURI(string _value, uint256 indexed _id);
    
    constructor() ERC721 ("Ethereum Paint", "ETHPAINT") {
        tokenCounter = 0;
        fee = 100000000000000000; //.1 ETH
        sizeStrings[0] = "0";
        sizeStrings[1] = "128";
        sizeStrings[2] = "256";
        sizeStrings[3] = "384";
    }
   
    function create() public {
        require(tokenCounter <= 512);
        require(balanceOf(msg.sender) < 2, "You may only mint two canvases per address" );
        _safeMint(msg.sender, tokenCounter);
        tokenIdString[tokenCounter] = uint2str(tokenCounter);
        bytes memory json = abi.encodePacked(
                'data:application/json;utf8,{"name":"4x4_canvas_',
                tokenIdString[tokenCounter],
                '.svg","description":"On%20chain%20canvases%20for%20chain%20paintings.",',
                '"attributes":[{"trait_type":"artist","value":"none"},{"trait_type":"iterations","value":0}],"image":"'
        );
        bytes memory svg = abi.encodePacked("<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20width='512'%20height='512'></svg>");
        string memory uri = string(abi.encodePacked(json,svg,'"}'));
        _setTokenURI(tokenCounter, uri);
        emit CreatedCanvas(tokenCounter, uri);
        tokenCounter = tokenCounter + 1;

    }

    function paint(uint256 tokenId, string[] calldata colors) public {
        require(ownerOf(tokenId) == msg.sender);
        require(!isFrozen[tokenId]);
        bytes memory svg = abi.encodePacked("<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20width='512'%20height='512'>");
        uint y_val = 0;
        for (uint i=0; i < 16; i++) {
            if (i % 4 == 0 && i > 3) {
                y_val = y_val + 1;
            }
            svg = abi.encodePacked(
                svg,
                " <rect%20x='",
                sizeStrings[i % 4],
                "'%20y='",
                sizeStrings[y_val],
                "'%20width='100%'%20height='100%'%20fill='",
                colors[i],
                "'/>"
            );
        }
        svg = abi.encodePacked(svg, "</svg>");
        bytes memory imageURI = abi.encodePacked("data:image/svg+xml;utf8,", svg);
        iterations[tokenId] = iterations[tokenId] + 1;
        string memory tokenURI = buildTokenURI(imageURI, tokenId);
        _setTokenURI(tokenId, tokenURI);

    }

    function buildTokenURI(bytes memory _imageURI, uint256 tokenId) public view returns (string memory) {
        return string(abi.encodePacked(
                'data:application/json;utf8,{"name":"4x4_canvas_',
                tokenIdString[tokenId],
                '.svg","description":"On%20chain%20canvases%20for%20chain%20paintings.","image":"', 
                _imageURI, 
                '","attributes":[{"trait_type":"artist","value":"',
                addressToString(msg.sender),
                '"},{"trait_type":"iterations","value":',
                uint2str(iterations[tokenId]),
                '}]}'
            )
        );
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function setFreezeFee(uint256 newFee) public onlyOwner {
        fee = newFee;
    }

    function freezeMetadata(uint256 tokenId) public payable {
        require(msg.value >= fee, "Need to send more eth");
        require(ownerOf(tokenId) == msg.sender);
        isFrozen[tokenId] = true;
        emit PermanentURI(tokenURI(tokenId), tokenId);
    }

    // // Shoutout Barnabas Ujvari -- https://stackoverflow.com/questions/47129173/how-to-convert-uint-to-string-in-solidity
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    // // Shoutout Mickey Soaci -- https://ethereum.stackexchange.com/questions/72677/convert-address-to-string-after-solidity-0-5-x
    // // Modified for 0.8.0
    function addressToString(address _addr) public pure returns(string memory) 
    {
        bytes32 value = bytes32(uint256(uint160(_addr)));
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(51);
        str[0] = '0';
        str[1] = 'x';
        for (uint256 i = 0; i < 20; i++) {
            str[2+i*2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3+i*2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }
}