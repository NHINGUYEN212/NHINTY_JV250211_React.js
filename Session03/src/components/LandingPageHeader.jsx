import React from "react";

export default function LandingPageHeading() {
    return (
        <header className="header">
            <p className="logo">whitepace</p>
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="#!">Products</a>
                    </li>
                    <li>
                        <a href="#!">Solutions</a>
                    </li>
                    <li>
                        <a href="#!">Resources</a>
                    </li>
                    <li>
                        <a href="#!">Pricing</a>
                    </li>
                </ul>
            </nav>
            <div className="action-wrapper">
                <a href="#!" className="login-btn">
                    Login
                </a>
                <a href="#!" className="try-btn">
                    Try Whitepace free →
                </a>
            </div>
        </header>
    );
}
