import React from "react";
import { taskDelete, taskFindAll } from "../redux/api/services/taskService";
import { useDispatch } from "react-redux";

function ModalConfirmDelete({ handleCancel, currentId }) {
    const dispatch = useDispatch();
    const handleDelete = async () => {
        await taskDelete(currentId);
        dispatch(taskFindAll());
        handleCancel();
    };
    return (
        <>
            {/* Modal xác nhận xóa */}
            <div className="overlay">
                <div className="modal-custom">
                    <div className="modal-header-custom">
                        <h5>Xác nhận</h5>
                        <i className="fas fa-xmark" onClick={handleCancel} />
                    </div>
                    <div className="modal-body-custom">
                        <p>Bạn chắc chắn muốn xóa công việc quét nhà?</p>
                    </div>
                    <div className="modal-footer-footer">
                        <button
                            className="btn btn-light"
                            onClick={handleCancel}
                        >
                            Hủy
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={handleDelete}
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalConfirmDelete;
