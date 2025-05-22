import React from "react";
import { useNavigate } from "react-router-dom";
import { listProducts } from "../data/dataProduct";

export default function ListProducts() {
    const navigate = useNavigate();

    return (
        <>
            <h1 className="text-center mt-5 mb-5 font-bold text-4xl">
                List Product
            </h1>
            <div className="flex flex-wrap gap-6 justify-center items-start min-h-screen p-8 bg-gray-50">
                {listProducts &&
                    listProducts.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className="border rounded shadow-sm p-4 flex flex-col gap-3 w-64 bg-white text-left"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded"
                                />
                                <div className="text-sm text-center text-gray-700">
                                    Id: {product.id}
                                </div>
                                <div className="font-semibold text-center">
                                    {product.name}
                                </div>
                                <div className="text-center font-medium">
                                    {product.price}
                                </div>
                                <button
                                    className="mt-auto bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded px-3 py-2 text-center"
                                    onClick={() =>
                                        navigate(
                                            `/product-detail/${product.id}`
                                        )
                                    }
                                >
                                    Xem chi tiết
                                </button>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
