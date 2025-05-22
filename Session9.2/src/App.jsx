import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./pages/PrivateRouter";
import AdminIndex from "./pages/AdminIndex";
import Account from "./pages/Account";
import Product from "./pages/Product";
import Order from "./pages/Order";

function App() {
    return (
        <Routes>
            <Route path="/admin" element={<PrivateRouter />}>
                <Route index element={<AdminIndex />}></Route>
                <Route path="account" element={<Account />}></Route>
                <Route path="product" element={<Product />}></Route>
                <Route path="order" element={<Order />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
