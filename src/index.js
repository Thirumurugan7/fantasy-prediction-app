import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Contest from "./components/Contest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Link to="/" element={<App />} />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contest" element={<Contest />} />
    </Routes>
  </Router>
);
