import React from "react";

export default function ModalConfirm({ show, todo, onClose, onConfirm }) {
    if (!show) return null;

    return (
        <>
            {/* Modal xác nhận xóa */}
            <div className="overlay" hidden="">
                <div className="modal-custom">
                    <div className="modal-header-custom">
                        <h5>Xác nhận</h5>
                        <i className="fas fa-xmark" onClick={onClose}/>
                    </div>
                    <div className="modal-body-custom">
                        <p>Bạn chắc chắn muốn xóa công việc {todo.name}?</p>
                    </div>
                    <div className="modal-footer-footer">
                        <button className="btn btn-light" onClick={onClose}>Hủy</button>
                        <button className="btn btn-danger" onClick={onConfirm}>Xóa</button>
                    </div>
                </div>
            </div>
        </>
    );
}
