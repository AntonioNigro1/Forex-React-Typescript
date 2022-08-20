import "./styles/global-styles.css";

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import Background from "./components/Background";
import { Menu } from "./components/Menu";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    <Background />
  </React.StrictMode>
);
