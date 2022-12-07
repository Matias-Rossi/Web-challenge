import React from 'react';

export function TextField({ label, id, type = "text", className = "" }) {

    const style = {
        /* backgroundColor: "black-25", */
    }

    return (
        <div className={`flex flex-col items-start gap-2 ${className} roboto-slab `}>
            <label htmlFor={id}>{label}</label>
            <input type="text" name={id} id={id} placeholder={label}  style={style} className="text-black bg-black-10 rounded p-2 w-full"/>
            
        </div>
    );
}
