import React, { useState } from 'react'
import black_logo from "~/assets/images/black_logo.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import LogInMenu from '~/components/input/LogInMenu';

function Header() {
  return (
    <header className='bg-white z-50 sticky top-0'>
        <div className='flex justify-between items-center mx-4 z-50'>
            <HeaderSocialIcons/>
            <div className='flex justify-center items-start z-50'>
                <div className='flex justify-end items-start z-50'>
                    <HeaderNavButton link="/restaurante" name="Restaurante"/>
                    <HeaderNavButton link="/tienda" name="Tienda online"/>
                </div>
                <HeaderLogo/>
                <div className='flex justify-start items-start z-50'>
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
    const location = useLocation().pathname;
    let isActive = location === link;

    return(
        <Link to={link} className={`mx-5 w-40 h-14 text-center noto-serif font-bold text-black flex flex-col justify-center hover:bg-black hover:text-white transition relative z-30`}>
            {/* En ralidad no va fondo negro, si no la banderita. El fondo negro va cuando está en hover */}
            {name}
            {isActive? activeBar(): null}
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
    const [loginMenu, setLoginMenu] = useState("hidden")

    const switchLoginMenu = () => {
        if (loginMenu === "hidden") {
            console.log("Login menu now showing");
            setLoginMenu("block")
        } else {
            console.log("Login menu now hidden");
            setLoginMenu("hidden")
        }
    }

    return (
        <div className='h-full ml-auto flex-1 relative'>
            <button to="" className="h-12 noto-serif font-bold black flex items-center justify-end" onClick={switchLoginMenu}>
                <FaUser/>
                <p className='black ml-2'>Iniciar Sesión</p>
            </button>
            <LogInMenu className={`${loginMenu} absolute`}/>
        </div>
    );
}

function activeBar() {
    return (
        <div className="flex w-full absolute bottom-0 z-0">
            <div className='h-1 w-1/3' style={{backgroundColor: "000000"}}/>
            <div className='h-1 w-1/3' style={{backgroundColor: "D60000"}}/>
            <div className='h-1 w-1/3' style={{backgroundColor: "F7C800"}}/>
        </div>
    );
}