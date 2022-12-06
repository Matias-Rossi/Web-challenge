import React from 'react'
import { Link } from "react-router-dom";

function PrimaryButton({text, icon, link, isBold = false ,...props}) {
  return (
    <Link to={link}>
        <button className='rounded-full bg-primary-gradient px-4 py-2' >
            <div className='flex justify-center items-center'>
                <p className='text-white text-xl mr-2'>{text}</p> {icon}
            </div>
        </button>
    </Link>
  )
}

export default PrimaryButton