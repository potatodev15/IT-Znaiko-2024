import React from 'react'
import pyramid from '../assets/hero.png'

const Symbol = () => {
  return (
    <div className='w-full h-[100vh] bg-default flex items-center font-text text-primary'>
        <div className='w-[1240px] h-[80%] mx-auto flex flex-col justify-center gap-10 items-center bg-yellow-500 text-center'>
            <img src={pyramid} alt="" className='w-[500px]'/>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-6xl md:text-6xl font-header'>Египет</h1>
                <p className='p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa quod iure vero quae ut perspiciatis, quisquam voluptatum doloremque cumque sed debitis consequatur aperiam animi libero facilis provident alias magnam?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint doloremque similique, blanditiis esse vitae tenetur illo hic repellendus numquam recusandae. Fugiat nisi provident aperiam earum odit repellendus explicabo id necessitatibus.
                </p>
                <button className='md:w-[20%] py-[15px] px-[25px] bg-blue-500'>Породи</button>
            </div>
        </div>
    </div>
  )
}

export default Symbol