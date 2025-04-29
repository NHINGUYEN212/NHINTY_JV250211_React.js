import React from "react";

export default function TodoItem({ todo, dispatch }) {
    return (
        <div className="todo-item">
            <span>{todo.name}</span>
            <button
                onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
                className="delete-btn"
            >
                Xóa
            </button>
        </div>
    );
}
