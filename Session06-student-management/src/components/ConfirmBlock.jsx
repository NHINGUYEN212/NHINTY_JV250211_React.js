export default function ConfirmBlock({
    openConfirmBlock,
    handleBlock,
    handleCloseConfirmBlock,
}) {
    return (
        <div className="overlay" hidden={!openConfirmBlock}>
            <div className="modal-custom">
                <div className="modal-title">
                    <h4>Cảnh báo</h4>
                    <i
                        className="fa-solid fa-xmark"
                        onClick={handleCloseConfirmBlock}
                    />
                </div>
                <div className="modal-body-custom">
                    <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
                </div>
                <div className="modal-footer-custom">
                    <button
                        className="btn btn-light"
                        onClick={handleCloseConfirmBlock}
                    >
                        Hủy
                    </button>
                    <button className="btn btn-danger" onClick={handleBlock}>
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
}
