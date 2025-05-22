import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate("/account");
    };
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
