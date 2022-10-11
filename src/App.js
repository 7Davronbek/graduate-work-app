import { HashRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
      <div className="blurRight"></div>
      <div className="vh-100"></div>
      <div className="vh-100"></div>
    </HashRouter>
  )
}

export default App