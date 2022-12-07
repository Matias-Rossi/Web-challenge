import React from 'react'
import { Link } from "react-router-dom";
import brezel from "../assets/images/brezel.png"


function ProductGridItem() {
  return (
    <Link className='flex flex-col items-start self-stretch grow gap-2'>
        <img src={brezel} alt="brezel" className=''/>
        <h6 className='text-xl'>Product</h6>
        <p className='text-black text-xl'>$2.499</p>
        {/* TODO Agregar oferta, tag de nuevo, imagen y que el producto pase por parametro */}
    </Link>
  )
}

export default ProductGridItem