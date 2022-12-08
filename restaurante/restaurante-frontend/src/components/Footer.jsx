import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import white_logo from "../assets/images/white_logo.png"
import SocialLinks from './SocialLinks'


function Footer({hideMap = false}) {
    const location = useLocation().pathname;
    

  return (
    <footer className='bg-black'>
        <div className="py-4 flex justify-center gap-5">
            <FooterSocialLinks/>
            <Divider/>
            <FooterSiteMap location={location}/>
            <Divider/>
            <FooterContact/>
            {!hideMap?<FooterMap/>:null}
        </div>

        {/* TODO Agregar copyright y "créditos" */}
    </footer>
  )
}

export default Footer

function FooterSocialLinks() {
    return(
    <div className="flex flex-col justify-center items-start gap-4 grow-0 self-stretch w-56 h-full">
        <div className="flex flex-col gap-0">
            <div className="flex-none grow-0 w-56 h-16 bg-no-repeat" style={{backgroundImage: `url(${white_logo})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
            <p className='text-white text-xs text-center'>Especialidades desde 2013</p>
        </div>
        <SocialLinks/>
    </div>
    );
}

function Divider() {
    return(
        <div className='w-px self-stretch' style={{backgroundColor: "#5A5A5A"}}/>
    );
}

function FooterSiteMap({location}) {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="flex flex-col justify-center items-start gap-2 grow-0 self-stretch">
            <FooterNavLink to="/" text="Inicio" currentRoute={location}/>
            <FooterNavLink to="/restaurante" text="Restaurante" currentRoute={location}/>
            <FooterNavLink to="/tienda" text="Tienda online" currentRoute={location}/>
            <FooterNavLink to="/sobre-nosotros" text="Sobre nosotros" currentRoute={location}/>
            <FooterNavLink to="/contacto" text="Contacto" currentRoute={location}/>
            <FooterNavLink to="/terminos-y-condiciones" text="Términos y condiciones" currentRoute={location}/>
            <a className='text-white text-xs hover:underline hover:cursor-pointer' onClick={scrollToTop}>Volver a la cima</a>
        </div>
    )
}

function FooterNavLink({to, text, currentRoute}) {
    const isActive = currentRoute === to;

    return(
        <NavLink className={`text-white text-xs hover:underline ${isActive? "font-bold":""}`} to={to}>{text}</NavLink>
    );

}

function FooterContact() {
    return(
        <div className="flex flex-col justify-center items-start gap-2 grow-0 self-stretch">
            <p className="text-white text-xs font-bold">Extrawurst - Gastschänke</p>
            <p className="text-white text-xs">Tres Sargentos 427</p>
            <p className="text-white text-xs">C1054, Ciudad Autónoma de Buenos Aires</p>
            <a className='text-white text-xs flex' href=""><FaPhone/> +54 911 5350-7371</a>
            <a className='text-white text-xs flex' href=""><FaWhatsapp/> +54 911 6755-6575</a>
            <p className="text-white text-xs">Martes a Domingos - 12:00 a 24:00hs</p>
        </div>
    );
}

function FooterMap() {
    return(
        <div className='relative text-right' style={{height: "187px", width: "325px"}}>
            <div className='overflow-hidden bg-none' style={{height: "187px", width: "325px"}}>
                <iframe width="325" height="187" id="gmap_canvas" src="https://maps.google.com/maps?q=Extrawurst&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
                <a href=""></a>
                <br/>
            </div>
        </div>
    );
}