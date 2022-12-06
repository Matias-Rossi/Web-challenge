import React from 'react'

function PrimaryButton({text, icon, onClick, isBold = false ,...props}) {
  return (
    <button className='rounded-full bg-white px-4 py-2' >
        <div className='flex justify-center items-center'>
            <p className='text-secondary text-xl mr-2'>{text}</p> {icon}
        </div>
    </button>
  )
}

export default PrimaryButton