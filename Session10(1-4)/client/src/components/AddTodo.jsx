import React from "react";

export default function AddTodo() {
    return (
        <div className="flex gap-2 mb-4 flex-col border-[1px] p-4 rounded-[5px] border-gray-300 shadow-xl">
            <input
                type="text"
                spellCheck="false"
                placeholder="Nhập tên công việc"
                className="flex-1 px-3 py-2 rounded outline-gray-300 border border-gray-300"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                Thêm công việc
            </button>
        </div>
    );
}
