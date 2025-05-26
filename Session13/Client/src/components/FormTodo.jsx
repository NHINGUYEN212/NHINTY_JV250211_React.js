import { useDispatch } from "react-redux";
import {
    taskAdd,
    taskFindAll,
    taskUpdate,
} from "../redux/api/services/taskService";
import ModalShowError from "./ModalShowError";
import { useEffect, useRef, useState } from "react";

function FormTodo({ edit, setEdit }) {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState("");
    const [error, setError] = useState(false);

    const handleCancel = () => setError(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (taskName === "") {
            setError(true);
            return;
        }

        const newTask = {
            taskName,
            completed: false,
        };

        if (!edit) {
            await taskAdd(newTask).then(() => dispatch(taskFindAll()));
        } else {
            await taskUpdate(newTask, edit.id).then(() => {
                dispatch(taskFindAll());
                setEdit(null);
            });
        }

        setTaskName("");
    };
    const ref = useRef();

    useEffect(() => {
        if (edit) {
            ref.current.focus();
            setTaskName(edit.taskName);
        }
    }, [edit]);

    return (
        <>
            <form
                className="d-flex justify-content-center align-items-center mb-4"
                onSubmit={handleSubmit}
            >
                <div className="form-outline flex-fill">
                    <input
                        type="text"
                        id="form2"
                        className="form-control"
                        name="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        ref={ref}
                    />
                    <label className="form-label" htmlFor="form2">
                        Nhập tên công việc
                    </label>
                </div>
                <button type="submit" className="btn btn-info ms-2">
                    {edit ? "Sửa" : "Thêm"}
                </button>
            </form>
            {error && (
                <ModalShowError handleCancel={handleCancel}></ModalShowError>
            )}
        </>
    );
}

export default FormTodo;
