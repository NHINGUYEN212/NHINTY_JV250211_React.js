export default function ConfirmDelete({
    openConfirmDelete,
    handleDelete,
    handleCloseConfirmDelete,
}) {
    return (
        <div className="overlay" hidden={!openConfirmDelete}>
            <div className="modal-custom">
                <div className="modal-title">
                    <h4>Cảnh báo</h4>
                    <i
                        className="fa-solid fa-xmark"
                        onClick={handleCloseConfirmDelete}
                    />
                </div>
                <div className="modal-body-custom">
                    <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
                </div>
                <div className="modal-footer-custom">
                    <button
                        className="btn btn-light"
                        onClick={handleCloseConfirmDelete}
                    >
                        Hủy
                    </button>
                    <button className="btn btn-danger" onClick={handleDelete}>
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
}
