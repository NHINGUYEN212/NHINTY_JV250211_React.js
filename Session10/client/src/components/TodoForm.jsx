import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoFilter from "./TodoFilter";
import TodosList from "./TodosList";
import FooterActions from "./FooterActions";
import axios from "axios";

export default function TodoForm() {
    const [isLoading, setIsLoading] = useState(true);
    const [listTodos, setListTodos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/listTodos`);
            setListTodos(response.data);
        } catch (error) {
            alert("Error" + error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
            {isLoading ? (
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            ) : (
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
                    <h1 className="mb-5 text-center text-2xl font-semibold">
                        Quản lý công việc
                    </h1>
                    <AddTodo />
                    <TodoFilter />
                    <TodosList todos={listTodos} />
                    <FooterActions />
                </div>
            )}
        </div>
    );
}
