import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dashboard, Landing, Error, Register } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/landing"}>Landing</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/landing" element={<Landing></Landing>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
