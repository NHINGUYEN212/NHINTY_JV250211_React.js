import React, { useEffect, useReducer } from "react";
import TodoInput from "./TodoInput";
import TodoListItems from "./TodoListItems";
import "./styles.css";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "SET_TODOS":
            return action.payload;
        default:
            return state;
    }
};

export default function TodoListIndex() {
    const [todos, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        const stored = localStorage.getItem("todos");
        if (stored) {
            dispatch({ type: "SET_TODOS", payload: JSON.parse(stored) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="todo-container">
            <TodoInput dispatch={dispatch} />
            <TodoListItems todos={todos} dispatch={dispatch} />
        </div>
    );
}
