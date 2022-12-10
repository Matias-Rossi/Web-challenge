import React from "react";
import PrimaryButton from "./PrimaryButton";
import FlatButton from "./FlatButton";
//import { faSquareArrowUpRight, faXMark } from "react-icons/fa";
import {
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  GrClose
} from "react-icons/gr"

function Modal({ setShowModal }) {
  const openExtrawurstSite = () => {
    window.open("https://www.bratwurst-argentina.com/", "_blank");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col justify-center items-center absolute h-screen z-10">
      <div className="rounded bg-white w-1/2 py-2 px-4">
        <div className="w-full flex justify-end"><CloseSymbol onClick={closeModal}/></div>
        <div className="pr-5">
          <h2>ATENCIÓN</h2>
          <p>
            Este sitio web no tiene relación alguna con EXTRAWURST, fue hecha
            exclusivamente como proyecto personal para practicar diseño y
            desarrollo web. <b> Para ir a la página real de Extrawurst, presione el
            botón con colores debajo. </b>
          </p>
        </div>
        <div className="pr-5 my-2">
          <h4>WARNING</h4>
          <p>
            This website has no relation with EXTRAWURST, it was made
            exclusively as a personal project to practice web design and
            development. <b> To go to the real Extrawurst website, press the button
            with colors below.</b>
          </p>
        </div>
        <div className="pr-5 my-2">
          <h4>WARNUNG</h4>
          <p>
            Diese Webseite hat keine Beziehung zu EXTRAWURST. Es wurde
            ausschließlich als persönliches Projekt erstellt, um Webdesign und
            -entwicklung zu üben. <b> Um zur echten Extrawurst-Website zu gelangen,
            drücken Sie die Schaltfläche mit den Farben unten.</b>
          </p>
        </div>
        <div className="flex gap-5">
          <PrimaryButton
            className="w-fit"
            onClick={openExtrawurstSite}
            text="Extrawurst-Bratwurst"
            icon={<FaExternalLinkAlt className="text-white" />}
          />
        </div>
      </div>
    </div>
  );
}

function CloseSymbol({onClick}) {
  return(
    <button>
      <GrClose className="font-error" onClick={onClick}/>
    </button>
  );
}

export default Modal;
