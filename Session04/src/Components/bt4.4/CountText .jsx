import React from "react";
import { useState } from "react";

export default function CountText() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <textarea
                    style={{ width: 500, padding: 30 }}
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
                <p>Số ký tự: {text.length}</p>
            </form>
        </div>
    );
}
