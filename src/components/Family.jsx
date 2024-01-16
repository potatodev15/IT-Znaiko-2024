import React from 'react'
import hero from '../assets/hero.png'
import { CiDesktopMouse2 } from "react-icons/ci";

const Family = () => {
  return (
    <div className='w-full h-[70vh] bg-white'>
        <div className='max-w-[1240px] h-full mx-auto grid md:grid-cols-2 md:gap-10 gap-0 pt-[80px]'>
            <div className='w-[100%] h-[90%] flex flex-col justify-center items-start gap-[50px] bg-yellow-500 text-center'>
              <h1 className='w-full text-6xl md:text-6xl'>Семейство</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quibusdam, neque modi ab rerum aut earum perspiciatis saepe perferendis? Reprehenderit voluptatem labore incidunt soluta cum a quis? Laudantium, autem similique?</p>
              <div className='w-full text-center mouse-animation-class'>
                  <CiDesktopMouse2 className='w-full text-center' size={60}/>
              </div>
            </div>
            <div className='w-[100%] h-[90%] flex flex-col justify-center items-center bg-blue-500'>
              <img src={hero} alt="/" className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Family