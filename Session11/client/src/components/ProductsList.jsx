import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetProductsList } from "../redux/actions/productActions";
import ProductItem from "./ProductItem";
import axios from "axios";

export default function ProductsList() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.listProduct);
    const quantities = useSelector((state) => state.cart.quantities);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3000/products");
                dispatch(actionGetProductsList(res.data));
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchProducts();
    }, [dispatch]);

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
                <h4 className="card-title mb-0">List Products</h4>
            </div>
            <div className="card-body">
                {productList.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        quantity={quantities[product.id] || 1}
                    />
                ))}
            </div>
        </div>
    );
}
