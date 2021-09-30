import React, { useState } from "react";
import { ethers } from "ethers";
import "../styles/explore.scss";
import "../styles/row.scss";
import "../styles/drawingPanel.scss";
import "../styles/pixel.scss"

export default function Explore(props) {
    const {epAddress, epABI} = props;
    const [svg, setSvg] = useState([])
    const [notDisplayed, setNotDisplayed] = useState(true)
    
    async function getPainting(id) {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(epAddress, epABI, provider)
            try {
              const data = await contract.tokenURI(id)
              return data
            } catch (err) {
              console.log("Error: ", err)
            }
        } 
    }

    async function retPainting(){
      let canvas = []
      let row = []
      let rowCount = 0
      let tc = 0
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(epAddress, epABI, provider)
        try {
          tc = await contract.tokenCounter()
        } catch (err) {
          console.log("Error: ", err)
        }
    } 
      for (let i=0; i<506; i++) {
        let uri = `data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20width='512'%20height='512'><rect%20x='0'%20y='0'%20width='100%'%20height='100%'%20fill='rgb(128,128,128)'/></svg>` 
        let img
        if (i < tc) {
          img = await getPainting(i)
        }
        if (img) {
          let imgA = img.split(`"image":"`,2)
          let svgA = imgA[1].split('"',2)
          uri = svgA[0]
          row.push(<div className="tooltip"><a href={`https://opensea.io/assets/0x811e245b74fa05a6514723ead75157f2f26a2cb5/${i}`}><img width="25rem" height="25rem" src={uri}/></a><span className="tooltiptext">canvas {i}</span></div>)
        } else {
          row.push(<div><a href="#"><img width="25rem" height="25rem" src={uri}/></a></div>)
        }
        
        rowCount ++
        if (rowCount === 22) {
          canvas.push(<div key={i} className="row">{row}</div>)
          row = []
          rowCount = 0
        }
      }
      setSvg(canvas)
    }

    if(notDisplayed) {
      retPainting()
      setNotDisplayed(!notDisplayed)
    }
    return <div id="pixels">{svg}</div>
}