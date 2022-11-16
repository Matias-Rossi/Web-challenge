import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col w-full bg-green-800 text-white text-center pt-2'>
        <h1 className='m-0 mb-2'>&lt;/&gt;</h1>
        <p className='text-gray-400'>Copyright &copy; 2022 La Librería SRL</p>
        <div className='flex justify-evenly my-2'>
            <a href="">Información fiscal</a>
            <a href="">Defensa del Consumidor</a>
        </div>
        <p className='text-gray-400 bg-gray-800 p-1'>Sitio web realizado por &lt;/&gt; Media &copy;</p>
    </footer>
  )
}

export default Footer