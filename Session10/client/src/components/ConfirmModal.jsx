export default function ConfirmModal({ isOpen, onClose, onConfirm, todoName }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Xác nhận</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-2xl"
                    >
                        &times;
                    </button>
                </div>
                <div className="mb-6 flex items-start">
                    <i className="fa-solid fa-circle-info text-red-500 text-2xl mr-3 mt-1"></i>
                    <p>
                        Bạn có chắc chắn muốn xóa công việc{" "}
                        <span className="font-bold">&lt;{todoName}&gt;</span>{" "}
                        không?
                    </p>
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded border border-gray-300 cursor-pointer hover:bg-gray-100"
                    >
                        Hủy
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
                    >
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
}
