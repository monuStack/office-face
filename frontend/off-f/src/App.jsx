import "./App.css";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/signup/Login";
import Desboard from "./components/desboard/Desboard";
import { Routes, Route, Link, Outlet } from "react-router";



function App() {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desboard" element={<Desboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
