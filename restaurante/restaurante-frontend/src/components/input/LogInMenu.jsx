import React from 'react'
import { TextField } from '~/components/TextField'
import { FaFacebook, FaArrowRight } from 'react-icons/fa'
import PrimaryButton from '~/components/PrimaryButton'
import FlatButton from '~/components/FlatButton'

function LogInMenu({className}) {
  return (
    <div className={"bg-white rounded p-2 border border-black-25 shadow-lg " + className}>
        <form action="" method="post">
          <div className="flex flex-col justify-start items-center gap-2">
              <TextField label="Email" id="email"/>
              <TextField label="Contraseña" id="password" type='password'/>
              <PrimaryButton text="Iniciar Sesión" pClassName='text-base'/>
              <button className='roboto-slab text-xs flex justify-center items-center text-black-75 gap-1'><FaFacebook/><p className='text-xs'>Iniciar sesión con Facebook</p></button>
              <div className="flex justify-end w-full mr-2">
                <FlatButton text="Registrarme" onClick={()=>{}} icon={<FaArrowRight/>} ></FlatButton> {/* TODO Gestionar olvide contraseña */}
              </div>
            </div>
        </form>
    </div>
  )
}

export default LogInMenu