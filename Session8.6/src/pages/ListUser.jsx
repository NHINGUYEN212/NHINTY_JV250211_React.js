import { useNavigate } from "react-router-dom";
import { listUser } from "../data/dataUser";

export default function ListUser() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap gap-6 justify-center items-start min-h-screen p-8 bg-gray-50">
            {listUser &&
                listUser.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className="border rounded shadow-sm p-6 flex flex-col gap-3 max-w-xs w-[250px] bg-white text-left"
                        >
                            <div>Id: {user.id}</div>
                            <div>UserName: {user.name}</div>
                            <div>Email: {user.email}</div>
                            <div>Address: {user.address}</div>
                            <button
                                className="mt-4 bg-gray-300 hover:bg-gray-400 transition-colors rounded px-3 py-2 text-center w-full"
                                onClick={() =>
                                    navigate(`/user-detail/${user.id}`)
                                }
                            >
                                Xem chi tiết
                            </button>
                        </div>
                    );
                })}
        </div>
    );
}
