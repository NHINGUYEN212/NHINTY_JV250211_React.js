import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import PrivateRouter from "./pages/PrivateRouter";
import Account from "./pages/Account";
import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Routes>
            <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/" element={<PrivateRouter isLoggedIn={isLoggedIn} />}>
                <Route path="account" element={<Account />} />
            </Route>
        </Routes>
    );
}

export default App;
