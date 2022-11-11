import React from "react";
import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const nav_style = {
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    padding: "0 1rem",
    alignItems: "stertch",
  };

  return (
    <nav style={nav_style}>
      <Link
        to="/"
        className="site-title text-inherit visited:text-white text-4xl items-center h-full flex"
        style={{font_family: "Sora, sans-serif"}}
      >
        &lt;&gt;
      </Link>
      <ul className="p-0 m-0 list-none flex gap-4">
        {isMobile && <FaBars className="block absolute top-0 right-0 text-3xl cursor-pointer" style={{transform: "translate(-20%,20%)"}}/>}
        {!isMobile && (
          <>
            <NavbarButton children={"Inicio"} to="/" />
            <NavbarButton children={"Buscar"} to="/busqueda" />
            <NavbarButton children={"Contacto"} to="/contacto" />
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

function NavbarButton({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={` hover:bg-stone-400 ${isActive ? "bg-stone-600" : ""}`}>
      <NavLink
        to={to}
        className="text-inherit h-full flex items-center p-1"
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
}


