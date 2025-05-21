import React from "react";

export default function ModalAlert({ show, message, onClose }) {
    if (!show) return null;
    return (
        <>
            {/* Modal cảnh báo lỗi */}
            <div className="overlay" hidden="">
                <div className="modal-custom">
                    <div className="modal-header-custom">
                        <h5>Cảnh báo</h5>
                        <i className="fas fa-xmark"  onClick={onClose}/>
                    </div>
                    <div className="modal-body-custom">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer-footer">
                        <button className="btn btn-light"  onClick={onClose}>Đóng</button>
                    </div>
                </div>
            </div>
        </>
    );
}
