import React, { useRef, useState } from "react"
import "../styles/editor.scss";
import Row from "./Row";

export default function DrawingPanel(props) {
    const starterRow = Array.apply(null, Array(4)).map(String.prototype.valueOf, "#ffffff");
    const starterCanvas = new Array(4).fill(starterRow);
    const [pixelColors, setPixelColors] = useState(starterCanvas);
    const [canvasId, setCanvasId] = useState(0);

    function getRow(row, col, color) {
        let temp_state = [...pixelColors]
        temp_state[row] = [...temp_state[row]]
        temp_state[row][col] = color;
        setPixelColors(temp_state);
    }
    const {selectedColor, paintCanvas} = props;

    const panelRef = useRef();

    let rows = [];

    for (let i = 0; i < 4; i++) {
        rows.push(<Row key={i} rowNum={i} width={4} selectedColor={selectedColor} getRow={getRow}/>)
    }

    function exportSvg() {
        let colors = []
        let colorsRGB = []
        for (let i = 0; i < pixelColors.length; i++) {
                for (let j = 0; j < pixelColors[i].length; j++) {
                    colors.push(pixelColors[i][j])
                    colorsRGB.push(`rgb(${parseInt(pixelColors[i][j].substr(1,2), 16)},${parseInt(pixelColors[i][j].substr(3,2), 16)},${parseInt(pixelColors[i][j].substr(5,2), 16)})`)
                }
        }
        paintCanvas(canvasId, colorsRGB)

    }

    function handleId(event) {
        setCanvasId(event.target.valueAsNumber)
    }

    return (
        <div id="drawingPanel">
            <div id="pixels" ref={panelRef}>
                {rows}
            </div>
            <div>
                <form>
                    <label>
                        canvas id:   
                        <input type="number" defaultValue={canvasId} onChange={(e)=>handleId(e)}></input>
                    </label>
                    <input type="button" value="submit" onClick={exportSvg}/>
                </form>
            </div>
        </div>
    );
}