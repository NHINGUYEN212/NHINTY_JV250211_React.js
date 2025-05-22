import React from "react";
import { Outlet } from "react-router-dom";

export default function PrivateRouter() {
    return (
        <div>
            <h1>Private Admin</h1>
            <Outlet />
        </div>
    );
}
