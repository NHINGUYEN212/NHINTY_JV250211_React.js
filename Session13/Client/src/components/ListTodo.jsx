import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { taskFindAll } from "../redux/api/services/taskService";
import ModalConfirmDelete from "./ModalConfirmDelete";

function ListTodo({ handleEdit }) {
    const { tasks } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [tabActive, setTabActive] = useState("All");
    const [filterTask, setFilterTask] = useState([]);

    const [currentId, setCurrentId] = useState(null);

    const handleShowConfirmDelete = (id) => {
        setCurrentId(id);
    };
    const handleCancel = () => {
        setCurrentId(null);
    };

    useEffect(() => {
        if (tasks) {
            if (tabActive === "All") {
                setFilterTask(tasks);
            } else if (tabActive === "Completed") {
                setFilterTask(tasks.filter((item) => item.completed));
            } else {
                setFilterTask(tasks.filter((item) => !item.completed));
            }
        }
        dispatch(taskFindAll());
    }, [tasks, tabActive]);
    return (
        <>
            {/* Tabs navs */}
            <ul className="nav nav-tabs mb-4 pb-2">
                <li
                    className="nav-item"
                    role="presentation"
                    onClick={() => setTabActive("All")}
                >
                    <a
                        className={`nav-link ${
                            tabActive === "All" && "active"
                        }`}
                    >
                        Tất cả
                    </a>
                </li>
                <li
                    className="nav-item"
                    role="presentation"
                    onClick={() => setTabActive("Completed")}
                >
                    <a
                        className={`nav-link ${
                            tabActive === "Completed" && "active"
                        }`}
                    >
                        Đã hoàn thành
                    </a>
                </li>
                <li
                    className="nav-item"
                    role="presentation"
                    onClick={() => setTabActive("Unfinished")}
                >
                    <a
                        className={`nav-link ${
                            tabActive === "Unfinished" && "active"
                        }`}
                    >
                        Chưa hoàn thành
                    </a>
                </li>
            </ul>
            {/* Tabs navs */}
            {/* Tabs content */}
            <div className="tab-content" id="ex1-content">
                <div className="tab-pane fade show active">
                    <ul className="list-group mb-0">
                        {filterTask &&
                            filterTask.map((item) => (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    handleShowConfirmDelete={
                                        handleShowConfirmDelete
                                    }
                                    handleEdit={handleEdit}
                                ></TodoItem>
                            ))}
                    </ul>
                </div>
            </div>
            {currentId && (
                <ModalConfirmDelete
                    handleCancel={handleCancel}
                    currentId={currentId}
                ></ModalConfirmDelete>
            )}
        </>
    );
}

export default ListTodo;
