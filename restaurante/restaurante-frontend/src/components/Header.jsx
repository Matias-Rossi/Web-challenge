import React from 'react'
import black_logo from "../assets/images/black_logo.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className='bg-white'>
        <div className='flex justify-between items-center mx-4'>
            <HeaderSocialIcons/>
            <div className='flex justify-center items-start'>
                <div className='flex justify-end items-start'>
                    <HeaderNavButton link="/restaurante" name="Restaurante"/>
                    <HeaderNavButton link="/tienda" name="Tienda online"/>
                </div>
                <HeaderLogo/>
                <div className='flex justify-start items-start'>
                    <HeaderNavButton className="basis-full" link="/sobre-nosotros" name="Sobre nosotros"/>
                    <HeaderNavButton className="basis-full" link="/contacto" name="Contacto"/>
                </div>
            </div>
            <HeaderLogIn/>
        </div>
    </header>
  )
}

export default Header


function HeaderSocialIcons() {
    return (
        <div className='flex justify-start items-center gap-4 mr-auto flex-1'>
            <HeaderSocialIcon link={"https://www.facebook.com/BratwurstArgentina/"} target="_blank" rel="noopener noreferrer" icon={<FaFacebook/>}/>
            <HeaderSocialIcon link={"https://www.instagram.com/extrawurst_argentina/"} target="_blank" rel="noopener noreferrer" icon={<FaInstagram/>}/>
            <HeaderSocialIcon link={"https://twitter.com/bratwurst_ar"} target="_blank" rel="noopener noreferrer" icon={<FaTwitter/>}/>
        </div>
    )
}

function HeaderSocialIcon({link, icon}) {
    return (
        <a href={link}>{icon}</a>
    );
}

function HeaderNavButton({link, name}) {
    const location = useLocation();
    /* let isActive = location === link; */
    let isActive = false;
    /* console.log(location); */

    return(
        <Link to={link} className={`mx-5 w-40 h-14 text-center noto-serif font-bold text-black flex flex-col justify-center ${isActive? "text-white black" : ""} hover:bg-black hover:text-white transition`}>
            {/* En ralidad no va fondo negro, si no la banderita. El fondo negro va cuando está en hover */}
            {name}
        </Link>
    );
}

function HeaderLogo() {
    const location = useLocation();
    let isActive = location === "/";

    return(
        <div className='self-center'>
            <Link to="/">
                <img src={black_logo} alt="Logo" className="h-12"/>
            </Link>
        </div>
    );
}

function HeaderLogIn() {
    return (
        <div className='h-full ml-auto flex-1'>
            <Link to="/login" className="h-12 noto-serif font-bold black flex items-center justify-end">
                <FaUser/>
                <p className='black ml-2'>Iniciar Sesión</p>
            </Link>
        </div>
    );
}