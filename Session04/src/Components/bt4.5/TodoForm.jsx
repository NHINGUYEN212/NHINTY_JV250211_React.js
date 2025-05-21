
import React, { useState } from 'react'
import "./TodoApp.css"

export default function TodoForm({ addTodo }) {

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input); 
        setInput(""); 
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" id="form2" className="form-control border" />
                <label className="form-label" htmlFor="form2">
                    Thêm công việc
                </label>
            </div>
            <button type="submit" className="btn btn-info ms-2">Thêm</button>
        </form>
    )
}
