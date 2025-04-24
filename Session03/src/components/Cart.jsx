import React from "react";

export default function Cart({ img, title, desc, quantity, price }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img
                                src={img}
                                className="img-fluid rounded-3"
                                alt="Shopping item"
                                style={{ width: 65 }}
                            />
                        </div>
                        <div className="ms-3">
                            <h5>{title}</h5>
                            <p className="small mb-0">{desc}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 50 }}>
                            <h5 className="fw-normal mb-0">{quantity}</h5>
                        </div>
                        <div style={{ width: 80 }}>
                            <h5 className="mb-0">${price}</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                            <i className="fas fa-trash-alt" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
