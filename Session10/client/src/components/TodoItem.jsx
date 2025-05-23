import React from "react";

export default function TodoItem({ data }) {
    return (
        <li className="flex items-center justify-between border border-gray-300 px-3 py-2 rounded">
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked={data.completed ? true : false}
                />
                <span className={data.completed ? "line-through" : ""}>
                    {data.todo}
                </span>
            </label>
            <div className="flex gap-4">
                <i className="fa-solid fa-pencil w-4 h-4 text-yellow-500 cursor-pointer"></i>
                <i className="fa-solid fa-trash w-4 h-4 text-red-500 cursor-pointer"></i>
            </div>
        </li>
    );
}
