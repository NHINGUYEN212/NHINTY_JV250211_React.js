import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    );
}

export default App;
