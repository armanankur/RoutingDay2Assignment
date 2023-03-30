import "./styles.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
