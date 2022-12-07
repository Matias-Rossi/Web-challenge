import React from 'react'
import { RestaurantInformation } from './RestaurantInformation'
import { TextField } from '../components/TextField';
import PrimaryButton from '../components/PrimaryButton';
import {FaPaperPlane} from 'react-icons/fa'

function Contact() {
  return (
    <main className='flex flex-col'>
        <div className="my-16 mx-40 grid grid-cols-2 gap-14 h-full flex-grow">
            <div className="flex flex-col justify-start items-start px-14 gap-10">
                <h2>Contáctenos</h2>
                <p>¿Tiene alguna pregunta sobre uno de nuestros productos o el proceso de pedido? ¿Quiere organizar un evento donde nuestra gastronomía de calidad se haga presente? Envíenos un mensaje y nos pondremos en contacto con usted.</p>
                <RestaurantInformation />
            </div>
            <form action="" method="post" className='mr-40'>
                <div className="grid grid-cols-2 grid-rows-5 gap-y-0 gap-x-9 flex-grow">
                    <TextField id="name" label="Nombre"  />
                    <TextField id="phone" label="Teléfono"  />
                    <TextField id="email" label="Email" className='col-span-2' type='email' />
                    <div className="flex flex-col items-start w-full col-span-2 roboto-slab gap-2 row-span-2">
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" className=' w-full bg-black-10 rounded p-2 text-black' placeholder='Mensaje' style={{minHeight: "100px"}}></textarea>
                    </div>
                    <PrimaryButton text="Enviar mensaje" icon={<FaPaperPlane className='text-white'/>} className="w-full col-span-2 mt-4" onClick={()=>alert("xd")}/> {/* TODO: Handlear envío */}
                    
                </div>
            </form>
        </div>
    </main>
  )
}

export default Contact

