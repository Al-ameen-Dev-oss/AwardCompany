import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./components/Footer";
import Products from "./sections/Products";

function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;