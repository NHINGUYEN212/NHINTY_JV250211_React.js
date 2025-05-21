import React, { useState } from "react";

export default function TodoInput({ dispatch }) {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (!input.trim()) return;
        const newTodo = {
            id: Date.now(),
            name: input.trim(),
        };
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setInput("");
    };

    return (
        <input
            type="text"
            placeholder="Nhập tên công việc"
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
    );
}
