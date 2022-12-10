import React, { useState } from "react";
import { TextField } from "~/components/TextField";
import { FaFacebook, FaArrowRight } from "react-icons/fa";
import PrimaryButton from "~/components/PrimaryButton";
import FlatButton from "~/components/FlatButton";
import { config } from "~/data/config";
import { data } from "autoprefixer";

function LogInMenu({ className }) {
  const [credentialsError, setCredentialsError] = useState(false);

  const submitClick = () => {
    console.log("click detectado");
    document.getElementById("login-form").submit();
  };

  const submitLogIn = (e) => {
    e.preventDefault();

    var formdata = new FormData();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    formdata.append("email", email);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: {},
      body: formdata,
      redirect: "follow",
    };

    fetch(config.backend_url + "/login", requestOptions)
      .then((response) => {
        if (response.status === 401) {
          setCredentialsError(true);
          return;
        } else if (response.status === 200) {
          //Success
          setCredentialsError(false);
          //console.log(response.dat)
          window.location.reload(false);
          return response.text();
        }
        response.text();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div
      className={
        "bg-white rounded p-2 border border-black-25 shadow-lg " + className
      }
    >
      <form
        action="/login"
        id="login-form"
        method="POST"
        onSubmit={submitLogIn}
      >
        <div className="flex flex-col justify-start items-center gap-2">
          <TextField label="Email" id="email" />
          <TextField label="Contraseña" id="password" type="password" />
          <PrimaryButton
            text="Iniciar Sesión"
            pClassName="text-base"
            type={"submit"}
          />
          <CredentialsErrorSign show={credentialsError} />
          <button className="roboto-slab text-xs flex justify-center items-center text-black-75 gap-1">
            <FaFacebook />
            <p className="text-xs">Iniciar sesión con Facebook</p>
          </button>
          <div className="flex justify-end w-full mr-2">
            <FlatButton
              text="Registrarme"
              onClick={submitClick}
              icon={<FaArrowRight />}
            ></FlatButton>{" "}
            {/* TODO Gestionar olvide contraseña */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogInMenu;

function CredentialsErrorSign({ show }) {
  return (
    <div
      className={
        "flex justify-center items-center text-xs  " + (show ? "" : "hidden")
      }
    >
      <p className="text-error text-xs">Usuario o contraseña incorrectos</p>
    </div>
  );
}
