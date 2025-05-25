import React from "react";
import { useDispatch } from "react-redux";
import {
    actionAddToCart,
    actionSetProductQuantity,
} from "../redux/actions/cartActions";

export default function ProductItem({ product, quantity }) {
    const dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        const value = Math.max(1, Number(e.target.value));
        dispatch(actionSetProductQuantity(product.id, value));
    };

    const handleAddToCart = () => {
        dispatch(actionAddToCart({ ...product, quantity }));
    };

    return (
        <div className="d-flex border-bottom pb-3 mb-3">
            <img
                className="img-thumbnail me-3"
                src={product.image}
                alt={product.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div className="flex-grow-1">
                <h5 className="mt-0 mb-1">{product.name}</h5>
                <p className="text-muted small mb-2">{product.detail}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-danger fs-6">
                        {product.price} USD
                    </span>
                    <div className="d-flex align-items-center">
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            className="form-control form-control-sm text-center me-2"
                            style={{ width: "60px" }}
                            disabled={product.disabled}
                            onChange={handleQuantityChange}
                        />
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={handleAddToCart}
                            disabled={product.disabled}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
