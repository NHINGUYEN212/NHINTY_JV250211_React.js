import React from "react";
import { useTodo } from "./TodoContext";

export default function TodoItem({todo}) {
    const { onCheck, onEdit, onDelete } = useTodo();
    return (
        <>
            <li
                className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                style={{
                    backgroundColor: "#f4f6f7",
                }}
            >
                <div>
                    <input className="form-check-input me-2" type="checkbox" checked={todo.completed} onChange={() => onCheck(todo.id)} />
                    {todo.completed ? <s>{todo.name}</s> : <span>{todo.name}</span>}
                </div>
                <div className="d-flex gap-3">
                    <i className="fas fa-pen-to-square text-warning" onClick={() => onEdit(todo)} />
                    <i className="far fa-trash-can text-danger" onClick={() => onDelete(todo)}/>
                </div>
            </li>
        </>
    );
}
