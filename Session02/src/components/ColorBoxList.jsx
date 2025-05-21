import React from "react";
import ColorBox from "./ColorBox";
import "./ColorBox.css";

export default function ColorBoxList() {
    const colors = [
        { color: "red", colorName: "Red" },
        { color: "green", colorName: "Green" },
        { color: "blue", colorName: "Blue" },
    ];
    return (
        <div className="containerColor">
            {colors.map((item, index) => (
                <ColorBox
                    key={index}
                    color={item.color}
                    colorName={item.colorName}
                />
            ))}
        </div>
    );
}
