import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
    return (
        <ul className="list-group mb-0">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
