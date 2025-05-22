import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Detail from "./pages/detail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                Home
            </Route>
            <Route path="/product" element={<Product />}>
                Product
            </Route>
            <Route path="/detail" element={<Detail />}>
                Detail
            </Route>
        </Routes>
    );
}

export default App;
