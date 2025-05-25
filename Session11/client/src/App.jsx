import React from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

export default function App() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <ProductsList />
                </div>
                <div className="col-md-6">
                    <Cart />
                </div>
            </div>
        </div>
    );
}
