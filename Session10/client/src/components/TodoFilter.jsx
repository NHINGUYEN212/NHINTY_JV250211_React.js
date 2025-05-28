export default function TodoFilter() {
    return (
        <div className="flex justify-around mb-4 border-[1px] p-4 rounded-[5px] border-gray-300 shadow-xl">
            <button className="px-4 py-1 rounded bg-blue-500 text-white cursor-pointer">
                Tất cả
            </button>
            <button className="px-4 py-1 rounded border border-gray-300 cursor-pointer">
                Hoàn thành
            </button>
            <button className="px-4 py-1 rounded border border-gray-300 cursor-pointer">
                Đang thực hiện
            </button>
        </div>
    );
}
