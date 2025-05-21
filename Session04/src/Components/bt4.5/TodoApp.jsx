import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(savedTodos);
    //them cong viec
    const addTodo = (text) => {
        if (text === "") {
            alert("Nhập công việc!");
            return;
        }

        const newTodo = { id: Date.now(), text, completed: false };

        const updateTodos = [...todos, newTodo];
        setTodos(updateTodos);

        localStorage.setItem("todos", JSON.stringify(updateTodos));
    };

    const toggleTodo = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const deleteTodo = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
            const updatedTodos = todos.filter((todo) => todo.id !== id);
            setTodos(updatedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
        }
    };

    return (
        <section className=" gradient-custom ">
            <div className="containerTodoForm py-5 h-100">
                <div
                    className="row d-flex justify-content-center align-items-center
              h-100"
                >
                    <div className="col col-xl-10">
                        <div className="card todo-form-container">
                            <div className="card-body p-5">
                                <h3
                                    style={{
                                        textAlign: "center",
                                        marginBottom: 40,
                                    }}
                                >
                                    Quản lý công việc
                                </h3>
                                <TodoForm addTodo={addTodo} />
                                <TodoList
                                    todos={todos}
                                    toggleTodo={toggleTodo}
                                    deleteTodo={deleteTodo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
