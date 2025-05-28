const FooterActions = () => {
    return (
        <div className="flex justify-between">
            <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 cursor-pointer">
                Xóa công việc hoàn thành
            </button>
            <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 cursor-pointer">
                Xóa tất cả công việc
            </button>
        </div>
    );
};

export default FooterActions;
