import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-24 bg-default fixed z-[1]'>
        <div className='max-w-[1240px] mx-auto flex flex-row justify-between items-center shadow-2xl px-4'>
            <div className='w-[128px] h-[95px]'>
                <img src={logo} alt="" className=''/>
            </div>
            <ul className='flex flex-row gap-2'>
                <li className='p-2 hover:bg-red-500 hover:text-white duration-300 ease-in-out'>
                    <a href="#hero">Начало</a>
                </li>
                <li className='p-2 hover:bg-red-500 hover:text-white duration-300 ease-in-out'>
                    <a href="#family">Семейството на котките</a>
                </li>
                <li className='p-2 hover:bg-red-500 hover:text-white duration-300 ease-in-out'>
                    <a href="#symbol">Народи</a>
                </li>
                <li className='p-2 hover:bg-red-500 hover:text-white duration-300 ease-in-out'>
                    <a href="#breed">Породи</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar