import React from "react";
import TodoItem from "./TodoItem";

export default function TodosList({ todos }) {
    return (
        <ul className="space-y-2 mb-4">
            {todos &&
                todos.map((todo, index) => (
                    <TodoItem
                        data={todo}
                        key={todo.id || index}
                        completed={false}
                    />
                ))}
        </ul>
    );
}
