import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoFilter from "./TodoFilter";
import TodosList from "./TodosList";
import FooterActions from "./FooterActions";
import axios from "axios";
import ConfirmModal from "./ConfirmModal";

export default function TodoForm() {
    const [isLoading, setIsLoading] = useState(true);
    const [listTodos, setListTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);

    const API_URL = "http://localhost:3000/listTodos";

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(API_URL);
            setListTodos(response.data);
        } catch (error) {
            console.error("Lỗi khi tải danh sách:", error);
            alert("Lỗi khi tải danh sách công việc: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddTodo = async (todoName) => {
        try {
            const newTodo = {
                todo: todoName,
                completed: false,
            };
            const response = await axios.post(API_URL, newTodo);
            setListTodos([...listTodos, response.data]);
        } catch (error) {
            console.error("Lỗi khi thêm công việc:", error);
            alert("Lỗi khi thêm công việc: " + error.message);
        }
    };

    const openDeleteModal = (todo) => {
        setTodoToDelete(todo);
        setIsModalOpen(true);
    };

    const closeDeleteModal = () => {
        setTodoToDelete(null);
        setIsModalOpen(false);
    };

    const confirmDeleteTodo = async () => {
        if (!todoToDelete) return;

        try {
            await axios.delete(`${API_URL}/${todoToDelete.id}`);
            setListTodos(
                listTodos.filter((todo) => todo.id !== todoToDelete.id)
            );
            closeDeleteModal();
        } catch (error) {
            console.error("Lỗi khi xóa công việc:", error);
            alert("Lỗi khi xóa công việc: " + error.message);
            closeDeleteModal();
        }
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
            {isLoading ? (
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            ) : (
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
                    <h1 className="mb-5 text-center text-2xl font-semibold">
                        Quản lý công việc
                    </h1>

                    <AddTodo onAddTodo={handleAddTodo} todos={listTodos} />
                    <TodoFilter />
                    <TodosList todos={listTodos} onDelete={openDeleteModal} />
                    <FooterActions />
                </div>
            )}
            <ConfirmModal
                isOpen={isModalOpen}
                onClose={closeDeleteModal}
                onConfirm={confirmDeleteTodo}
                todoName={todoToDelete?.todo}
            />
        </div>
    );
}
