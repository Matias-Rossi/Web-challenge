import React from 'react';
import Spacer from '../components/Spacer';
import ContentBlock from '../components/ContentBlock';
import { Link } from "react-router-dom";
import FlatButton from '../components/FlatButton';
import { FaArrowRight } from 'react-icons/fa';
import exterior_2 from '../assets/images/exterior_2.png';
import { RestaurantInformation } from './RestaurantInformation';

function Restaurante() {
  return (
    <main>
        <div className="" style={{height: "calc(100vh-14rem)"}}>
            <div className="grid grid-rows-1 grid-cols-2 h-3/4"> {/* Restaurant Information */}
                <div className="w-full" style={{backgroundImage: `url(${exterior_2})`, backgroundSize: "cover"}}/>
                <ContentBlock>
                    <h3 className='font-bold'>Lorem ipsum dolor sit</h3>
                    <p className='w-3/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, reiciendis modi. A in aliquid deleniti esse deserunt, quisquam modi, enim, libero quis molestias rem voluptates quo consectetur eum tempore perferendis.
                        <br/><br/>Amet consectetur adipisicing elit. Minus, possimus reprehenderit. Recusandae culpa deleniti reprehenderit repellendus magni in iure. Enim impedit sed quas! Commodi et, odio a placeat dolorum cumque.
                        Temporibus cupiditate molestiae dolorem unde laborum, ea, similique consequuntur debitis, harum aspernatur consequatur saepe pariatur dolores quam quasi libero? Error, vitae quae!
                    </p>
                    <FlatButton text="Ver menú" icon={<FaArrowRight/>}/>
                    <RestaurantInformation/>
                </ContentBlock>
            </div>
            <Spacer/>
        </div>
        <div className="grid grid-rows-1 grid-cols-2"> {/* Map and events */}
            <div className="bg-black-10">
                <ContentBlock>
                    <h4>Cómo llegar</h4>
                    <div className='relative text-right' style={{height: "400px", width: "664px"}}>
                    <div className='overflow-hidden bg-none' style={{height: "400px", width: "664px"}}>
                        <iframe width="664" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Extrawurst&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
                        <a href=""></a>
                        <br/>
                    </div>
                </div>
                </ContentBlock>
            </div>
            <ContentBlock>
                <h4>Eventos en Extrawurst</h4>
                <EventList/>
                <div className="flex justify-end gap-2 w-full items-center">
                    <p className='text-black'>¿Desea organizar su propio evento?</p>
                    <Link className='text-black font-bold underline flex items-center gap-1' style={{lineHeight: "21px"}} to="/contacto">Contáctenos <FaArrowRight/></Link>
                    
                </div>
            </ContentBlock>
        </div>
    </main>
  )
}

export default Restaurante

export function VerticalDivider() {
    return (
        <div className="h-full self-stretch flex items-center">
            <div className="w-px bg-black-50 h-5/6"/>
        </div>
    );
}

function EventList() {
    return(
        <div className='flex flex-col gap-4'>
            <Event title="Tándem" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."/>
            <Event title="Stammtisch" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."/>
            <Event title="Mundial Qatar 2022" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."/>
        </div>
    );
}

function Event({title, description, imageUrl}) {
    return(
        <article className='flex gap-6'>
            <div className="w-2/3 bg-black-25" style={{/*TODO Agregar imagen del evento*/}}/>
            <div className="flex flex-col items-start">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </article>
    );
}