import React from "react";
import TodoItem from "./TodoItem";

export default function TodoListItems({ todos, dispatch }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </div>
    );
}
