import { useState } from "react";
import "./styles.css";
import "./normalize.css";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Restaurante from "./pages/Restaurante";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tienda from "./pages/Tienda";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {<Header toggle={toggle} />}
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
      
      <div className="text-center">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restaurante" element={<Restaurante/>}/>
          <Route path="/tienda" element={<Tienda/>}/>
          <Route path="/sobre-nosotros" element={<About/>}/>
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
      </div>
      {<Footer/>}
    </>
  );
}

export default App;