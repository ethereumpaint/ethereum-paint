import React, { useState } from "react";
import "../styles/row.scss";
import Pixel from "./Pixel";

export default function Row(props) {
    const {selectedColor, getRow, rowNum} = props;
    function getColor(color, id) {
        getRow(rowNum, id, color);
    }

    let pixels = [];
    
    
    for (let i = 0; i < 4; i++) {
        pixels.push(<Pixel key={i} id={i} selectedColor={selectedColor} getColor={getColor}/>)
    }

    return <div className="row">{pixels}</div>
}