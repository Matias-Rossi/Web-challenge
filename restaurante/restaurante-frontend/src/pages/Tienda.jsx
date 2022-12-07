import React from 'react'
import ProductGridItem from '../components/ProductGridItem';
import { FaExclamationTriangle } from "react-icons/fa";

function Tienda() {
  return (
    <main>
        <div className="mt-12">
            <h3 className='text-center'>Tienda online</h3>
            <div className="flex w-full justify-center items-center">
                <CookingWarning/>
            </div>
        </div>
        <nav className='flex w-full justify-center mt-1'>
            <div className="flex roboto-slab gap-2">
                <span className='text-base'>Filtrar según:</span>
                <ul className='flex gap-2 items-center'>
                    <li className='hover:cursor-pointer font-bold text-secondary'>Salchichas</li>
                    <VerticalDivider/>
                    <li className='hover:cursor-pointer'>Salsas y más</li>
                </ul>
            </div>
        </nav>
        <div className="flex w-full flex-col justify-center items-center">
            <ProductGrid/>
        </div>

    </main>
  )
}

export default Tienda

function VerticalDivider() {
    return(
        <div className='w-px self-stretch bg-black' />
    );
}

function ProductGrid() {
    return(
        <div className="grid mx-36 my-14 grid-cols-4 gap-x-8 gap-y-12 w-3/4">
            <ProductGridItem/>
            <ProductGridItem/>
            <ProductGridItem/>
            <ProductGridItem/>
            <ProductGridItem/>
            <ProductGridItem/>
            <ProductGridItem/>
            <ProductGridItem/>
            <ProductGridItem/>
            <ProductGridItem/>
        </div>
    );

}

function CookingWarning() {
    return(
        <div className="rounded-lg w-1/2 p-4 my-4" style={{backgroundColor: "#E8E8E8"}}>
            <div className="flex gap-4 items-center mb-2">
                <FaExclamationTriangle className='text-2xl'/>
                <h5>Sobre la cocción de las salchichas</h5>
            </div>
            <p>Las salchichas generalmente se hacen a la plancha, sartén o a la parrilla. Los pueden colocar sobre la parrilla directamente congeladas. Deberán tener un color marón mas no negro, si los deja mucho tiempo en la parrilla perderán su jugosidad, quedando finalmente secos. No se sirven hervidas.</p>
        </div>

    );
}