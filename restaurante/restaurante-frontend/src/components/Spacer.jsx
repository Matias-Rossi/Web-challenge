import React from 'react'
import white_logo from "../assets/images/white_logo.png"

function Spacer() {
  return (
    <div className='h-52 flex justify-center items-center bg-black bg-no-repeat' style={{backgroundImage: `url(${white_logo})`, backgroundSize: "contain", backgroundPosition: "center"}}>
        <div className="w-100% h-100%" />
    </div>
  )
}

export default Spacer