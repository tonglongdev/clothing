import { Routes, Route } from "react-router-dom";
import About from "../views/About/index.jsx";
import Contact from "../views/Contact/index.jsx";
import Home from "../views/Home/index.jsx";
import Product from "../views/Product/index.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}
