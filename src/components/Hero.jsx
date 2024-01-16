import React from 'react'
import hero from '../assets/hero.png'
import ReactTyped from 'react-typed'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-red-900 pt-[80px]'>
        <div className='max-w-[1240px] h-full mx-auto grid md:grid-cols-2 md:gap-10 gap-0'>
            <div className='w-[100%] h-[90%] flex flex-col justify-center items-start gap-[50px] bg-yellow-500 text-center md:text-start'>
              <h1 className='w-full text-6xl md:text-6xl'>Коткоистория</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quibusdam, neque modi ab rerum aut earum perspiciatis saepe perferendis? Reprehenderit voluptatem labore incidunt soluta cum a quis? Laudantium, autem similique?</p>
              <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                <button className="w-[80%] py-[15px] px-[25px] bg-blue-500">Button 1</button>
                <button className='w-[80%] py-[15px] px-[25px] bg-blue-500'>Button 2</button>
              </div>
            </div>
            <div className='w-[100%] h-[90%] flex flex-col justify-center items-center bg-blue-500'>
              <img src={hero} alt="/" className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Hero