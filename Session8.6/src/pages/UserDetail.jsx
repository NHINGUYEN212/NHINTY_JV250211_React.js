import { useNavigate, useParams } from "react-router-dom";
import { listUser } from "../data/dataUser";

export default function UserDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dataUser = listUser.find((user) => user.id == id);
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-2xl my-6 font-bold w-full px-5 max-w-sm">
                Thông tin chi tiết
            </h1>
            {dataUser && (
                <div className="border-[1px] p-5 flex flex-col gap-2 text-left w-[250px] px-5">
                    <div>Id: {dataUser.id}</div>
                    <div>UserName: {dataUser.name}</div>
                    <div>Email: {dataUser.email}</div>
                    <div>Address: {dataUser.address}</div>
                    <button
                        className="bg-gray-300 w-full border mt-1 p-1"
                        onClick={() => navigate(-1)}
                    >
                        Quay lại
                    </button>
                </div>
            )}
        </div>
    );
}
