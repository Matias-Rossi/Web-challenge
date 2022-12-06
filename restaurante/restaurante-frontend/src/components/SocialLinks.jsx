import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex flex-col align-center justify-center grow-0 gap-2">
        {/* TODO Agregar enlaces */}
        <a className='text-white text-xs flex gap-2 items-center' href=""><FaInstagram/>extrawurst_argentina</a>
        <a className='text-white text-xs flex gap-2 items-center' href=""><FaFacebook/>BratwurstArgentina</a>
        <a className='text-white text-xs flex gap-2 items-center' href=""><FaTwitter/>BRATWURST_AR</a>
        <a className='text-white text-xs flex gap-2 items-center' href=""><FaWhatsapp/>+54 911 6755-6575</a>
    </div>
  )
}

export default SocialLinks