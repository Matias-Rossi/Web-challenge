import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import menu_completo from '../assets/images/menu_completo.png'
import PrimaryButton from '../components/PrimaryButton'
import ContentBlock from '../components/ContentBlock'
import Spacer from '../components/Spacer'
import strudel from '../assets/images/strudel.png'
import interior_1 from '../assets/images/interior_1.png'
import salchichas_2 from '../assets/images/salchichas_2.png'
import interior_2 from '../assets/images/interior_2.png'
import exterior_3 from '../assets/images/exterior_3.png'
import cervezas_1 from '../assets/images/cervezas_1.png'
import interior_3 from '../assets/images/interior_3.png'
import salchichas_3 from '../assets/images/salchichas_3.png'

function About() {
    const navigate = useNavigate();

  return (
    <main>
        <div className="grid grid-rows-1 grid-cols-2 h-fit">
            <img src={menu_completo} alt="Menu de Extrawurst" />
            <ContentBlock>
                <div>
                    <p>Sobre nosotros</p>
                    <h3>Quiénes somos</h3>
                </div>
                <p className='w-3/4'>Comenzamos en 2013 en el barrio de Constitución con un objetivo en mente, traer maravillosos y únicos gustos de Alemania a Buenos Aires. Hoy estamos ubicados en Retiro y continuamos con la misma meta, juntando gente y ofreciéndoles lo mejor que tenemos.<br/><br/>EXTRAWURST - Bratwurst Argentina es sinónimo de calidad, frescura y sabor. Elaboramos nuestros productos sin aditivos ni conservantes de ninguna clase. Utilizamos las materias primas y especias más frescas. Todo lo que hacemos lo realizamos de modo tradicional, a mano y con amor.</p>
                <PrimaryButton text="Sobre nuestro restaurante" icon={<FaArrowRight/>} onClick={() => navigate('/restaurante')}/>
            </ContentBlock>
        </div>
        <Spacer/>
        <ImageGrid/>
       
    </main>
  )
}

export default About

function ImageGrid() {
    return(
        <div className="grid grid-cols-4 grid-rows-2 bg-black">
            <img src={strudel} alt="strudel con helado" />
            <img src={interior_1} alt="barra de Extrawurst" />
            <img src={salchichas_2} alt="Menu de salchicha con papas" />
            <img src={interior_2} alt="Mesas en Extrawurst con sillones" />
            <img src={exterior_3} alt="Frente de extrawurst" />
            <img src={cervezas_1} alt="Cervezas" />
            <img src={interior_3} alt="Barra con chopperas y brezels" />
            <img src={salchichas_3} alt="Menú de salchichas grandes con Leberwurst" />
        </div>
    );
}