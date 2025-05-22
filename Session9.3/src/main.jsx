import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProducts from "./pages/ListProducts";
import ProductDetail from "./pages/ProductDetail";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListProducts />}></Route>
            <Route
                path="product-detail/:id"
                element={<ProductDetail />}
            ></Route>
        </Routes>
    </BrowserRouter>
);
