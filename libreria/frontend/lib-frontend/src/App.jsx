import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./styles.css";
import "./normalize.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      
      <div className="m-4 text-center">
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/busqueda" element={<Search/>}/> */}
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="/producto/:id" element={<ProductDetailPage/>}/> {/* TODO */}
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
