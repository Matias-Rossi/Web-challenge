import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./styles.css";
import "./normalize.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Sidebar/>
      
      <div className="m-4 text-center">
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/busqueda" element={<Search/>}/> */}
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
