import React from 'react';
import { FaMapPin, FaClock, FaBook, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { VerticalDivider } from './Restaurante';

export function RestaurantInformation() {
    return (
        <div className="flex items-start justify-start gap-4">
            <div className="flex flex-col gap-4 w-2/6">
                <div className='flex gap-2 items-center'>
                    <FaMapPin className='text-2xl text-black' />
                    <p className='text-black text-lg'>Dirección</p>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <p>Tres Sargentos 427</p>
                    <p>C1054, Ciudad Autónoma de Buenos Aires</p>
                </div>
            </div>
            <VerticalDivider />
            <div className="flex flex-col gap-4 w-1/4">
                <div className='flex gap-2 items-center'>
                    <FaClock className='text-2xl text-black' />
                    <p className='text-black text-lg'>Horario</p>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <p>Martes a Domingo</p>
                    <p>12 a 24 hs.</p>
                </div>
            </div>
            <VerticalDivider />
            <div className="flex flex-col gap-4 w-1/4">
                <div className='flex gap-2 items-center'>
                    <FaBook className='text-2xl text-black' />
                    <p className='text-black text-lg'>Reservas</p>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <a className='flex gap-2'><FaPhone className='text-black-75' /><p href=""> +54 911 5350-7371</p></a>
                    <a className='flex gap-2'><FaWhatsapp className='text-black-75' /><p href=""> +54 911 6755-6575</p></a>
                </div>
            </div>
        </div>
    );
}
