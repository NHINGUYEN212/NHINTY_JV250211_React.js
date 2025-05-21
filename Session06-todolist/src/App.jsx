import "./App.css";
import React, { useEffect, useState } from "react";
import ModalConfirm from "./components/ModalConfirm";
import ModalAlert from "./components/ModalAlert";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";
import TodoForm from "./components/TodoForm";
import { TodoContext } from "./components/TodoContext";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const [filter, setFilter] = useState("all");
    const [modalConfirm, setModalConfirm] = useState({
        show: false,
        todo: null,
    });
    const [alert, setAlert] = useState("");

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");

        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        } else {
            setTodos([]);
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    const handleAdd = (name) => {
        if (!name.trim()) return setAlert("Tên công việc không được để trống.");
        if (
            todos.find((todo) => todo.name === name && todo.id !== editTodo?.id)
        )
            return setAlert("Tên công việc không được phép trùng.");

        if (editTodo) {
            setTodos((prev) =>
                prev.map((todo) =>
                    todo.id === editTodo.id ? { ...todo, name } : todo
                )
            );
            setEditTodo(null);
        } else {
            const newTodo = {
                id: Date.now(),
                name: name,
                completed: false,
            };
            setTodos((prev) => [...prev, newTodo]);
        }
    };

    const handleCheck = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleEdit = (todo) => {
        setEditTodo(todo);
    };

    const handleDelete = (todo) => {
        setModalConfirm({ show: true, todo: todo });
    };

    const confirmDelete = () => {
        setTodos((prev) =>
            prev.filter((todo) => todo.id !== modalConfirm.todo.id)
        );
        setModalConfirm({ show: false, todo: null });
    };

    const getFilteredTodos = () => {
        if (filter === "done") return todos.filter((todo) => todo.completed);
        if (filter === "undone") return todos.filter((todo) => !todo.completed);
        return todos;
    };

    const contextValue = {
        onCheck: handleCheck,
        onEdit: handleEdit,
        onDelete: handleDelete,
    };

    return (
        <>
            <TodoContext.Provider value={contextValue}>
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card">
                                    <div className="card-body p-5">
                                        <TodoForm
                                            onAdd={handleAdd}
                                            editTodo={editTodo}
                                        ></TodoForm>
                                        {/* Tabs navs */}
                                        <Tabs
                                            setFilter={setFilter}
                                            filter={filter}
                                        ></Tabs>
                                        {/* Tabs navs */}
                                        {/* Tabs content */}
                                        <div
                                            className="tab-content"
                                            id="ex1-content"
                                        >
                                            <div className="tab-pane fade show active">
                                                <TodoList
                                                    todos={getFilteredTodos()}
                                                ></TodoList>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalConfirm
                    show={modalConfirm.show}
                    todo={modalConfirm.todo}
                    onClose={() => setModalConfirm({ show: false, todo: null })}
                    onConfirm={confirmDelete}
                ></ModalConfirm>
                <ModalAlert
                    message={alert}
                    onClose={() => setAlert("")}
                    show={!!alert}
                ></ModalAlert>
            </TodoContext.Provider>
        </>
    );
}
