import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
//import styled from "styled-components";

function Sidebar({ isOpen, toggle}) {
  return (
    <div
      className={`fixed w-full h-full bg-gray-700 flex justify-center items-start left-0 ease-in-out duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      } ${isOpen ? "top-0" : "-top-full"}`}
      style={{ zIndex: 999 }}
    >
      {" "}
      {/* SidebarContainer */}
      <FaTimes className="text-white absolute top-5 right-6 bg-transparent text-3xl cursor-pointer outline-none" onClick={toggle}/>
      <div
        className="text-white text-center flex flex-col justify-items-start mt-40" /* style={{display: "grid", grid_template_columns: "1fr", grid_template_rows: "repeat(3,80px)", zIndex:999}} */
      >
        {" "}
        {/* SidebarWrapper */}
        <h1>&lt;&gt;</h1>
        {/* NAVEGACION */}
        <SidebarButton to="/">
          {" "}
          {/* SidebarLink */}
          Inicio
        </SidebarButton>
        <SidebarButton to="/busqueda">Búsqueda</SidebarButton>
        <SidebarButton to="/contacto">Contacto</SidebarButton>
      </div>
    </div>
  );
}

function SidebarButton({ to, children, ...props }) {
  return (
    <Link
      to={to}
      className="text-white text-2xl flex items-center justify-center ease-in-out duration-200 cursor-pointer hover:ease-in-out hover:duration-200 hover:text-green-500 mt-5"
    >
      {children}
    </Link>
  );
}

export default Sidebar;