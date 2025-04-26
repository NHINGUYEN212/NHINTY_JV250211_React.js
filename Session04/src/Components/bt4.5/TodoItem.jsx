import React from 'react'

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li
            className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
            style={{ backgroundColor: "#f4f6f7" }}
        >
            <div>
                <input className="form-check-input me-2" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
            </div>
            <div>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Xóa
                </button>
            </div>
        </li>
    )
}