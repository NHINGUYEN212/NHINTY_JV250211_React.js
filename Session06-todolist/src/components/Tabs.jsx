import React from "react";

export default function Tabs({ setFilter, filter }) {
    return (
        <>
            {/* Tabs navs */}
            <ul className="nav nav-tabs mb-4 pb-2">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${
                            filter === "all" ? "active" : ""
                        }`}
                        onClick={() => setFilter("all")}
                    >
                        Tất cả
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${
                            filter === "done" ? "active" : ""
                        }`}
                        onClick={() => setFilter("done")}
                    >
                        Đã hoàn thành
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${
                            filter === "undone" ? "active" : ""
                        }`}
                        onClick={() => setFilter("undone")}
                    >
                        Chưa hoàn thành
                    </button>
                </li>
            </ul>
            {/* Tabs navs */}
        </>
    );
}
