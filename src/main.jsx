import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index.jsx";
import "./index.css";
import About from "./views/About/index.jsx";
import Contact from "./views/Contact/index.jsx";
import Home from "./views/Home/index.jsx";
import Product from "./views/Product/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
