import React, { useState } from "react";
import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";
import ModalConfirmDelete from "./components/ModalConfirmDelete";
import { useSelector } from "react-redux";

function App() {
    const [edit, setEdit] = useState(null);

    const { tasks } = useSelector((state) => state.tasks);

    const handleEdit = (id) => {
        setEdit(tasks.find((e) => e.id === id));
    };
    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="card-body p-5">
                                    <FormTodo
                                        edit={edit}
                                        setEdit={setEdit}
                                    ></FormTodo>
                                    <ListTodo
                                        handleEdit={handleEdit}
                                    ></ListTodo>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
