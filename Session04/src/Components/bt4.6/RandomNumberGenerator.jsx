import React, { useState } from "react";
import "./RandomNumberGenerator.css";

export default function RandomNumberGenerator() {
    const [number, setNumber] = useState(null);
    const handleRandomNumber = () => {
        setNumber(Math.floor(Math.random() * 10) + 1);
    };
    return (
        <div className="random-container">
            <h2>Tạo số ngẫu nhiên (1 - 10)</h2>
            <button onClick={handleRandomNumber} className="random-btn">
                Tạo số
            </button>
            <div className="textContainer">
                <div>
                    {number !== null ? (
                        <p>Số của bạn là: {number}</p>
                    ) : (
                        <p>Chưa có số nào được tạo</p>
                    )}
                </div>
            </div>
        </div>
    );
}
