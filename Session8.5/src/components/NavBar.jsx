import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const navLinkClass = ({ isActive }) =>
        `px-4 py-2 rounded transition font-medium 
     ${isActive ? "text-white bg-red-600" : "text-gray-700 hover:bg-gray-100"}`;

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="flex justify-center space-x-6 py-4">
                    <li>
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" className={navLinkClass}>
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/detail" className={navLinkClass}>
                            Detail
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
