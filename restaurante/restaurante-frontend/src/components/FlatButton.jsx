import React from 'react'

function FlatButton({text, icon, onClick, pClassName="", type="" ,...props}) {
  return (
    <button className='flex gap-2 items-center' type={type} onClick={onClick}>
        <VerticalDivider/>
        <p className={'text-black ' + pClassName}>{text}</p>
        {icon}
    </button>

  )
}

export default FlatButton

function VerticalDivider() {
    return(
        <div className='w-1 h-6 bg-secondary'/>
    );
}