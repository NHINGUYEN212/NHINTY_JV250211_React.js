import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listProducts } from "../data/dataProduct";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dataProduct = listProducts.find(
        (product) => product.id === Number(id)
    );

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
            <h1 className="text-4xl font-bold mb-6">
                Thông tin chi tiết sản phẩm
            </h1>

            {dataProduct ? (
                <div className="bg-white rounded shadow p-5 w-80">
                    <img
                        src={dataProduct.image}
                        alt={dataProduct.name}
                        className="w-full h-48 object-cover rounded mb-4"
                    />
                    <div className="text-sm text-center text-gray-700 mb-1">
                        Id: {dataProduct.id}
                    </div>
                    <div className="text-lg text-center font-semibold mb-1">
                        {dataProduct.name}
                    </div>
                    <div className="text-center font-medium mb-4">
                        {dataProduct.price}
                    </div>
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                        onClick={() => navigate(-1)}
                    >
                        Quay lại
                    </button>
                </div>
            ) : (
                <div className="text-red-500 font-semibold">
                    Không tìm thấy sản phẩm!
                </div>
            )}
        </div>
    );
}
