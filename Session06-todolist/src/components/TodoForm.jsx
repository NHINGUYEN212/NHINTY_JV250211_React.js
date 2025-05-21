import React, { useState, useEffect } from "react";

export default function TodoForm({ onAdd, editTodo}) {
    const [name, setName] = useState("");

    useEffect(() => {
        if (editTodo) setName(editTodo.name);
    }, [editTodo]);
        const handleSubmit = (e) => {
            e.preventDefault();
            onAdd(name);
            setName("");
        };
    return (
        <>
            <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
                <div className="form-outline flex-fill">
                    <input type="text" id="form2" className="form-control" value={name} onChange={(e) => setName(e.target.value)}
                    autoFocus={!editTodo}/>
                    <label className={`form-label ${name || editTodo ? 'active' : ''}`} htmlFor="form2">
                        Nhập tên công việc
                    </label>
                </div>
                <button type="submit" className="btn btn-info ms-2">
                    {editTodo ? "Lưu" : "Thêm"}
                </button>
            </form>
        </>
    );
}
