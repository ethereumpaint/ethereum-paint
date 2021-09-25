import React, { useRef, useState } from "react"
import "../styles/editor.scss";
import Row from "./Row";

export default function DrawingPanel(props) {
    const starterRow = Array.apply(null, Array(16)).map(String.prototype.valueOf, "#ffffff");
    const starterCanvas = new Array(16).fill(starterRow);
    const [pixelColors, setPixelColors] = useState(starterCanvas);

    function getRow(row, col, color) {
        let temp_state = [...pixelColors]
        temp_state[row] = [...temp_state[row]]
        temp_state[row][col] = color;
        setPixelColors(temp_state);
    }
    const {selectedColor} = props;

    const panelRef = useRef();

    let rows = [];

    for (let i = 0; i < 16; i++) {
        rows.push(<Row key={i} rowNum={i} width={16} selectedColor={selectedColor} getRow={getRow}/>)
    }

    function exportSvg() {
        // let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="464" height="464">`
        // let x_val = 0;
        // let y_val =  0;
        // for (let i = 0; i < pixelColors.length; i++) {
        //     for (let j = 0; j < pixelColors[i].length; j++) {
        //         svg = svg + `<rect x="${x_val}" y="${y_val}" width="29" height="29" style="fill: ${pixelColors[i][j]}" />`
        //         x_val += 29;
        //     }
        //     x_val = 0;
        //     y_val += 29;
        // }
        // svg = svg + "</svg>"
        // console.log(svg)
        // const imageURI = "data:image/svg+xml;base64,"+ Buffer.from(svg).toString('base64');
        // console.log(imageURI)
        let colors = []
        for (let i = 0; i < pixelColors.length; i++) {
                for (let j = 0; j < pixelColors[i].length; j++) {
                    colors.push(pixelColors[i][j])
                }
        }
        console.log(colors)

    }

    return (
        <div id="drawingPanel">
            <div id="pixels" ref={panelRef}>
                {rows}
            </div>
            <button className="button" onClick={exportSvg}>Export</button>
        </div>
    );
}