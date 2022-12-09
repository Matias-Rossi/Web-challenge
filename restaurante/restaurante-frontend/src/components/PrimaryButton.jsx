import React from 'react'
import { Link } from "react-router-dom";

//TODO: Separar en 2?

function PrimaryButton({text, icon, link, onClick, isBold = false, pClassName="", className = "", type=""}) {
  return (
    <button className={`rounded bg-primary-gradient px-4 py-2 w-full ${className}`} onClick={onClick} type={type}>
        <div className='flex justify-center items-center gap-2'>
            <p className={`text-white text-xl ${pClassName} ${isBold? "font-bold" : ""}`}>{text}</p> {icon}
        </div>
    </button>
  )
}

export default PrimaryButton

export function PrimaryButtonLink({text, icon, to, isBold = false, className="", type=""}) {
  return(
    <Link className={`rounded-full bg-primary-gradient px-4 py-2 ${className}`} to={to} type={type} >
      <div className='flex justify-center items-center gap-2'>
          <p className={`text-white text-xl ${isBold? "font-bold" : ""}`}>{text}</p> {icon}
      </div>
    </Link>
  );
}