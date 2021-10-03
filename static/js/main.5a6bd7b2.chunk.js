(this["webpackJsonpeth-paint"]=this["webpackJsonpeth-paint"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},231:function(e,t){},241:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),i=n(102),a=n.n(i),c=(n(117),n(118),n(3)),o=n.n(c),u=n(21),d=n(11),l=(n(70),n(110)),b=n(27),j=(n(96),n(97),n(8));function f(e){var t=e.selectedColor,n=e.id,s=e.getColor,i=Object(r.useState)("#fff"),a=Object(d.a)(i,2),c=a[0],o=a[1],u=Object(r.useState)(c),l=Object(d.a)(u,2),b=l[0],f=l[1],p=Object(r.useState)(!0),h=Object(d.a)(p,2),v=h[0],x=h[1];return Object(j.jsx)("div",{className:"pixel",onClick:function(){o(t),x(!1),s(t,n)},onMouseEnter:function(){f(c),o(t)},onMouseLeave:function(){v&&o(b),x(!0)},style:{backgroundColor:c}})}function p(e){var t=e.selectedColor,n=e.getRow,r=e.rowNum;function s(e,t){n(r,t,e)}for(var i=[],a=0;a<4;a++)i.push(Object(j.jsx)(f,{id:a,selectedColor:t,getColor:s},a));return Object(j.jsx)("div",{className:"row",children:i})}function h(e){var t=Array.apply(null,Array(4)).map(String.prototype.valueOf,"#ffffff"),n=new Array(4).fill(t),s=Object(r.useState)(n),i=Object(d.a)(s,2),a=i[0],c=i[1],o=Object(r.useState)(0),u=Object(d.a)(o,2),l=u[0],f=u[1];function h(e,t,n){var r=Object(b.a)(a);r[e]=Object(b.a)(r[e]),r[e][t]=n,c(r)}for(var v=e.selectedColor,x=e.paintCanvas,O=Object(r.useRef)(),w=[],m=0;m<4;m++)w.push(Object(j.jsx)(p,{rowNum:m,width:4,selectedColor:v,getRow:h},m));return Object(j.jsxs)("div",{id:"drawingPanel",children:[Object(j.jsx)("div",{id:"pixels",ref:O,children:w}),Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("label",{children:["canvas id:",Object(j.jsx)("input",{type:"number",defaultValue:l,onChange:function(e){f(e.target.valueAsNumber)}})]}),Object(j.jsx)("input",{type:"button",value:"submit",onClick:function(){for(var e=[],t=[],n=0;n<a.length;n++)for(var r=0;r<a[n].length;r++)e.push(a[n][r]),t.push("rgb(".concat(parseInt(a[n][r].substr(1,2),16),",").concat(parseInt(a[n][r].substr(3,2),16),",").concat(parseInt(a[n][r].substr(5,2),16),")"));x(l,t)}})]})})]})}var v=n(15);n(229),n(230);function x(e){var t=e.epAddress,n=e.epABI,s=Object(r.useState)([]),i=Object(d.a)(s,2),a=i[0],c=i[1],l=Object(r.useState)(!0),b=Object(d.a)(l,2),f=b[0],p=b[1],h=Object(r.useState)(!0),x=Object(d.a)(h,2),O=x[0],w=x[1];function m(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(o.a.mark((function e(r){var s,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=13;break}return s=new v.a.providers.Web3Provider(window.ethereum),i=new v.a.Contract(t,n,s),e.prev=3,e.next=6,i.tokenURI(r);case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(3),console.log("Error: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(){var r,s,i,a,u,d,l,b,f,p,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],s=[],i=0,a=0,"undefined"===typeof window.ethereum){e.next=16;break}return u=new v.a.providers.Web3Provider(window.ethereum),d=new v.a.Contract(t,n,u),e.prev=7,e.next=10,d.tokenCounter();case 10:a=e.sent,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),console.log("Error: ",e.t0);case 16:l=0;case 17:if(!(l<506)){e.next=30;break}if(b="data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20width='512'%20height='512'><rect%20x='0'%20y='0'%20width='100%'%20height='100%'%20fill='rgb(128,128,128)'/></svg>",f=void 0,!(l<a)){e.next=24;break}return e.next=23,m(l);case 23:f=e.sent;case 24:f?(p=f.split('"image":"',2),h=p[1].split('"',2),b=h[0],s.push(Object(j.jsxs)("div",{className:"tooltip",children:[Object(j.jsx)("a",{href:"https://opensea.io/assets/0x811e245b74fa05a6514723ead75157f2f26a2cb5/".concat(l),children:Object(j.jsx)("img",{width:"25rem",height:"25rem",src:b})}),Object(j.jsxs)("span",{className:"tooltiptext",children:["canvas ",l]})]}))):s.push(Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("img",{width:"25rem",height:"25rem",src:b})})})),22===++i&&(r.push(Object(j.jsx)("div",{className:"row",children:s},l)),s=[],i=0,c(r));case 27:l++,e.next=17;break;case 30:w(!O),c(r);case 32:case"end":return e.stop()}}),e,null,[[7,13]])})))).apply(this,arguments)}return f&&(!function(){k.apply(this,arguments)}(),p(!f)),Object(j.jsx)("div",{id:"pixels",children:O?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"loadtext",children:"loading..."}),a]}):a})}function O(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(!0),a=Object(d.a)(i,2),c=a[0],b=a[1],f=Object(r.useState)(!0),p=Object(d.a)(f,2),O=p[0],w=(p[1],Object(r.useState)(!1)),m=Object(d.a)(w,2),g=m[0],k=m[1],y=Object(r.useState)(!1),C=Object(d.a)(y,2),I=C[0],S=C[1],A=Object(r.useState)("paint"),N=Object(d.a)(A,2),F=N[0],E=N[1],P=Object(r.useState)("#f44336"),R=Object(d.a)(P,2),W=R[0],B=R[1],T=Object(r.useState)(""),U=Object(d.a)(T,2),q=U[0],L=U[1],z=Object(r.useState)(0),M=Object(d.a)(z,2),_=M[0],J=M[1],V="0x811E245B74Fa05A6514723EAd75157f2F26a2cB5",G=["event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)","event ApprovalForAll(address indexed owner, address indexed operator, bool approved)","event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)","event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)","function addressToString(address _addr) pure returns (string)","function approve(address to, uint256 tokenId)","function balanceOf(address owner) view returns (uint256)","function buildImgURI(bytes svg) pure returns (bytes)","function buildTokenURI(bytes imageURI, uint256 tokenId, bool newCanvas) view returns (string)","function create()","function fee() view returns (uint256)","function getApproved(uint256 tokenId) view returns (address)","function isApprovedForAll(address owner, address operator) view returns (bool)","function isFrozen(uint256) view returns (bool)","function iterations(uint256) view returns (uint256)","function name() view returns (string)","function owner() view returns (address)","function ownerOf(uint256 tokenId) view returns (address)","function paint(uint256 tokenId, string[] colors)","function preserve(uint256 tokenId) payable","function renounceOwnership()","function safeTransferFrom(address from, address to, uint256 tokenId)","function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)","function setApprovalForAll(address operator, bool approved)","function setFreezeFee(uint256 newFee)","function sizeStrings(uint256) view returns (string)","function supportsInterface(bytes4 interfaceId) view returns (bool)","function symbol() view returns (string)","function tokenCounter() view returns (uint256)","function tokenIdString(uint256) view returns (string)","function tokenURI(uint256 tokenId) view returns (string)","function transferFrom(address from, address to, uint256 tokenId)","function transferOwnership(address newOwner)","function withdraw()"];function X(){return Y.apply(this,arguments)}function Y(){return(Y=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("req acc"),t=window.ethereum,console.log(t.isConnected()),e.next=5,t.request({method:"eth_requestAccounts"});case 5:n=e.sent,console.log(n),L(n[0]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return(Z=Object(u.a)(o.a.mark((function e(){var t,n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=11;break}return e.next=3,X();case 3:return t=new v.a.providers.Web3Provider(window.ethereum),n=t.getSigner(),r=new v.a.Contract(V,G,n),e.next=8,r.create({gasLimit:45e4});case 8:return s=e.sent,e.next=11,s.wait();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(u.a)(o.a.mark((function e(t,n){var r,s,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=11;break}return e.next=3,X();case 3:return r=new v.a.providers.Web3Provider(window.ethereum),s=r.getSigner(),i=new v.a.Contract(V,G,s),e.next=8,i.paint(t,n,{gasLimit:14e5});case 8:return a=e.sent,e.next=11,a.wait();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(u.a)(o.a.mark((function e(){var t,n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=11;break}return e.next=3,X();case 3:return t=new v.a.providers.Web3Provider(window.ethereum),n=t.getSigner(),r=new v.a.Contract(V,G,n),e.next=8,r.preserve(_,{value:v.a.utils.parseEther(".2"),gasLimit:55e3});case 8:return s=e.sent,e.next=11,s.wait();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{id:"editor",children:[Object(j.jsx)("header",{children:Object(j.jsxs)("ul",{id:"nav",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Ethereum Paint"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",onClick:X,children:q||"Connect Wallet"})})]})}),Object(j.jsxs)("div",{className:"buttonGroup",children:[Object(j.jsx)("button",{onClick:function(){return Z.apply(this,arguments)},children:"mint a canvas (3 max)"}),Object(j.jsx)("button",{onClick:function(){s(!n),b(!c),E("paint"===F?"reset":"paint")},children:F}),Object(j.jsx)("button",{onClick:function(){S(!I)},children:"preserve painting"}),Object(j.jsx)("button",{onClick:function(){k(!g)},children:"about"})]}),Object(j.jsx)("div",{children:g&&Object(j.jsxs)("ul",{className:"about",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://etherscan.io/address/0x811e245b74fa05a6514723ead75157f2f26a2cb5",children:"etherscan"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://opensea.io/collection/ethereum-paint-4x4",children:"opensea"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://discord.gg/AXbjY5qvWZ",children:"discord"})})]})}),Object(j.jsx)("div",{children:I&&Object(j.jsx)("ul",{className:"preserve",children:Object(j.jsxs)("li",{children:[Object(j.jsx)("li",{children:" are you sure you want to do this? "}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("label",{children:["canvas id:",Object(j.jsx)("input",{type:"number",defaultValue:_,onChange:function(e){J(e.target.valueAsNumber)}})]}),Object(j.jsx)("input",{type:"button",value:"submit",onClick:function(){return H.apply(this,arguments)}})]})]})})}),Object(j.jsxs)("div",{id:"canvas",children:[n&&Object(j.jsx)(h,{selectedColor:W,paintCanvas:function(e,t){return D.apply(this,arguments)}}),n&&Object(j.jsx)(l.a,{color:W,className:"colorPicker",onChangeComplete:function(e){B(e.hex)}})]}),O&&Object(j.jsx)(x,{epABI:G,epAddress:V})]})}var w=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O,{})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},70:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[241,1,2]]]);
//# sourceMappingURL=main.5a6bd7b2.chunk.js.map