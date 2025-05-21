import React, { useState } from "react";
import "./ToggleInfo.css";

export default function ToggleInfo() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = () => {
        setIsVisible((currentState) => !currentState);
    };
    return (
        <div className="toggleContainer">
            <h2 className="toggleInfo">Ẩn/Hiện Thông Tin </h2>
            <button className="toggleBtn" onClick={toggleVisible}>
                {isVisible ? "Ẩn thông tin" : "Hiển thị thông tin"}
            </button>
            {isVisible && (
                <p>
                    Chào mừng bạn đến với thế giới React! Đây là đoạn văn bản
                    được điều khiển bỏi state 'useState'
                </p>
            )}
        </div>
    );
}
