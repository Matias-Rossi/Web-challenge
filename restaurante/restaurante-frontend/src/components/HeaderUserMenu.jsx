import React from "react";
import {useNavigate} from "react-router-dom";
import {config} from "~/data/config";

function HeaderUserMenu({ className = "" }) {
    const navigate = useNavigate();

    const goToProfile = () => navigate("/perfil");
    const goToOrders = () => navigate("/pedidos");
    const logOut = () => {
        console.log("Peticion de logout");
        var requestOptions = {
            method: "POST",
            headers: {},
            redirect: "follow",
        };
        fetch(config.backend_url + "/logout", requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    console.log("User logged out");
                    return response.text();
                } else {
                    console.log("User not logged out");
                    return response.text();
                }
            })
            .then((result) => {
                window.location.reload();
            });
    }


  return (
    <div
      className={
        "bg-white rounded p-2 border border-black-25 shadow-lg overflow-hidden whitespace-nowrap text-ellipsis flex flex-col gap-2 " +
        className
      }
    >
      <HeaderUserMenuButton text="Ver mi perfil" onClick={goToProfile}/>
      <HeaderUserMenuButton text="Ver mis pedidos" onClick={goToOrders}/>
      <HeaderUserMenuButton text="Cerrar sesión" onClick={logOut}/>
    </div>
  );
}

function HeaderUserMenuButton({ text, onClick }) {
  return <button className="roboto-slab text-black">{text}</button>;
}

export default HeaderUserMenu;
