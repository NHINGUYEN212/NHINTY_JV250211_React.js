import React from "react";
import Cart from "./Cart";
export default function ListCart() {
    const carts = [
        {
            img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
            title: "Iphone 11 pro",
            desc: "256GB, Navy Blue",
            quantity: 2,
            price: 900,
        },
        {
            img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
            title: "Samsung galaxy Note 10",
            desc: "256GB, Navy Blue",
            quantity: 2,
            price: 900,
        },
        {
            img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
            title: "Canon EOS M50",
            desc: "Onyx Black",
            quantity: 1,
            price: 1199,
        },
        {
            img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
            title: "MacBook Pro",
            desc: "1TB, Graphite",
            quantity: 1,
            price: 1799,
        },
    ];
    return (
        <div className="col-lg-7">
            <h5 className="mb-3">
                <a href="#!" className="text-body">
                    <i className="fas fa-long-arrow-alt-left me-2" />
                    Continue shopping
                </a>
            </h5>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">
                        You have {carts.length} items in your cart
                    </p>
                </div>
                <div>
                    <p className="mb-0">
                        <span className="text-muted">Sort by:</span>{" "}
                        <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1" />
                        </a>
                    </p>
                </div>
            </div>
            {carts.map((item, index) => (
                <Cart key={index} {...item} />
            ))}
        </div>
    );
}
