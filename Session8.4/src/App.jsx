import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"



function App() {


  return (
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
</Routes>
  )
}

export default App
