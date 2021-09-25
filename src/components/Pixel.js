import React, { useState } from "react";
import "../styles/pixel.scss";

export default function Pixel(props) {
    const { selectedColor, id, getColor } = props;

    const [pixelColor, setPixelColor] = useState("#fff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    function applyColor() {
        setPixelColor(selectedColor);
        setCanChangeColor(false);
        getColor(selectedColor, id);
    }

    function changeColorOnHover() {
        setOldColor(pixelColor);
        setPixelColor(selectedColor);
    }

    function resetColor() {
        if (canChangeColor) {
            setPixelColor(oldColor);
        }

        setCanChangeColor(true);
    }

    return <div className="pixel" onClick={applyColor} onMouseDrag={applyColor} onMouseEnter={changeColorOnHover} onMouseLeave={resetColor} style={{backgroundColor: pixelColor}}></div>
 
}