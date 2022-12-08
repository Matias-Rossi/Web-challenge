import React from 'react'
import { Link } from "react-router-dom";

function PrimaryButton({text, icon, link, onClick, isBold = false, pClassName="", className = "" ,...props}) {
  return (
    <Link to={link} className={className}>
        <button className="rounded-full bg-primary-gradient px-4 py-2 w-full" onClick={onClick}>
            <div className='flex justify-center items-center'>
                <p className={`text-white text-xl mr-2 ${pClassName} ${isBold? "font-bold" : ""}`}>{text}</p> {icon}
            </div>
        </button>
    </Link>
  )
}

export default PrimaryButton