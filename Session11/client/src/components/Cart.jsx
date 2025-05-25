import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-danger text-white">
                <h4 className="card-title mb-0">Your Cart</h4>
            </div>
            <div className="card-body p-0">
                {cartItems.length === 0 ? (
                    <div className="alert alert-warning m-3">
                        Your cart is empty.
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover mb-0 align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th width="5%" className="text-center">
                                        STT
                                    </th>
                                    <th>Name</th>
                                    <th width="15%">Price</th>
                                    <th width="15%" className="text-center">
                                        Quantity
                                    </th>
                                    <th width="25%" className="text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        index={index}
                                    />
                                ))}
                            </tbody>
                            <tfoot className="table-light">
                                <tr>
                                    <td colSpan={3} className="text-start ps-3">
                                        There are <b>{cartItems.length}</b>{" "}
                                        items in your shopping cart.
                                    </td>
                                    <td className="text-center">
                                        <b>{totalItems}</b>
                                    </td>
                                    <td className="fw-bold text-danger text-end pe-3 fs-5">
                                        {totalPrice} USD
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="card-footer alert alert-success mb-0 rounded-0 rounded-bottom">
                    Add to cart successfully!
                </div>
            )}
        </div>
    );
}
