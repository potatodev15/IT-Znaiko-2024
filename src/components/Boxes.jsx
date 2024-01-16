import React from 'react'
import { FaStar } from "react-icons/fa";

const Boxes = () => {
  return (
    <div className='w-full h-[105vh] md:h-[70vh] pt-10 bg-green-500'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center pt-[20px] gap-20'>
            <h1 className='text-6xl text-center'>Защо коткоистория</h1>
            <div className='max-w-[1240px] flex flex-row flex-wrap items-center justify-center md:justify-between gap-10'>
                <div className='w-[300px] h-[350px] bg-gray-500 flex flex-col justify-evenly items-center p-5 text-center border-2 border-blue-500 border-dashed rounded-xl'>
                    <FaStar />
                    <h1 className='text-xl'>Изследвайте Историята на Вашата Котка</h1>
                    <p>Открийте произхода на домашните котки, следвайки техните еволюционни следи и интересни адаптации, които ги правят толкова уникални.</p>
                </div>
                {/* Second Card */}
                <div className='w-[300px] h-[350px] bg-gray-500 flex flex-col justify-evenly items-center p-5 text-center border-2 border-blue-500 border-dashed rounded-xl'>
                    <FaStar />
                    <h1 className='text-xl'>Изследвайте Историята на Вашата Котка</h1>
                    <p>Открийте произхода на домашните котки, следвайки техните еволюционни следи и интересни адаптации, които ги правят толкова уникални.</p>
                </div>
                <div className='w-[300px] h-[350px] bg-gray-500 flex flex-col justify-evenly items-center p-5 text-center border-2 border-blue-500 border-dashed rounded-xl'>
                    <FaStar />
                    <h1 className='text-xl'>Изследвайте Историята на Вашата Котка</h1>
                    <p>Открийте произхода на домашните котки, следвайки техните еволюционни следи и интересни адаптации, които ги правят толкова уникални.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Boxes