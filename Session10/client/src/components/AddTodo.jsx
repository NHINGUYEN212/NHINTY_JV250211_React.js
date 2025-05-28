import { useState } from "react";

export default function AddTodo({ onAddTodo, todos }) {
    const [todoName, setTodoName] = useState("");
    const [error, setError] = useState("");

    const validateInput = (name) => {
        const trimmedName = name.trim();

        if (!trimmedName) {
            setError("Tên công việc không được phép để trống.");
            return false;
        }

        if (
            todos.some(
                (todo) => todo.todo.toLowerCase() === trimmedName.toLowerCase()
            )
        ) {
            setError("Tên công việc không được phép trùng.");
            return false;
        }

        setError("");
        return true;
    };

    const handleAddClick = () => {
        if (validateInput(todoName)) {
            onAddTodo(todoName.trim());
            setTodoName("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddClick();
        }
    };

    const handleChange = (e) => {
        setTodoName(e.target.value);
        if (error) {
            setError("");
        }
    };

    return (
        <div className="flex gap-2 mb-4 flex-col border-[1px] p-4 rounded-[5px] border-gray-300 shadow-xl">
            <input
                type="text"
                spellCheck="false"
                placeholder="Nhập tên công việc"
                className={`flex-1 px-3 py-2 rounded outline-gray-300 border ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                value={todoName}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {error && (
                <span className="text-red-500 text-sm -mt-1 mb-2">{error}</span>
            )}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                onClick={handleAddClick}
            >
                Thêm công việc
            </button>
        </div>
    );
}
