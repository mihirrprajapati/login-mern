import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./component/Login";
import { Register } from "./component/Register";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./component/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
