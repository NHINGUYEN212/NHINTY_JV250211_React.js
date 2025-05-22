import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListUser from "./pages/ListUser";
import UserDetail from "./pages/UserDetail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<ListUser />}></Route>
            <Route path="user-detail/:id" element={<UserDetail />}></Route>
        </Routes>
    );
}

export default App;
