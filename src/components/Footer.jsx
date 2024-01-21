import React from 'react'
import image from '../assets/logo.png'
import { FaInstagramSquare, FaDribbbleSquare, FaFacebookSquare, FaYoutubeSquare, FaPinterestSquare } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='w-full h-[60vh] flex flex-col items-center bg-red-500'>
      <div className='flex flex-row items-center'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center md:gap-[320px] gap-10'>
          <div className='flex flex-col justify-center items-center gap-10'>
            <img src={image} alt="" />
            <h1 className='text-6xl mt-[-80px] text-default font-header'>Коткоистория</h1>
            <div className='w-full flex flex-row justify-between'>
              <a href='https://example.com' target='_blank'>
                <FaInstagramSquare size={40} className="hover:text-red-900 text-pink-900 duration-300 ease-in-out"/>
              </a>
              <a href='https://example.com' target='_blank'>
                <FaDribbbleSquare size={40} className="hover:text-red-900 text-pink-900 duration-300 ease-in-out"/>
              </a>
              <a href='https://example.com' target='_blank'>
                <FaFacebookSquare size={40} className="hover:text-red-900 text-pink-900 duration-300 ease-in-out"/>
              </a>
              <a href='https://example.com' target='_blank'>
                <FaYoutubeSquare size={40} className="hover:text-red-900 text-pink-900 duration-300 ease-in-out"/>
              </a>
              <a href='https://example.com' target='_blank'>
                <FaPinterestSquare size={40} className="hover:text-red-900 text-pink-900 duration-300 ease-in-out"/>
              </a>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <div className='w-[100%] flex flex-row gap-3'>
              <input type="email" className='w-[80%] p-[15px] rounded-md'/>
              <button className='w-[20%] bg-red-900 flex flex-row justify-center items-center text-white rounded-md'><IoSendSharp /></button>
            </div>
            <div className='w-full flex flex-col justify-center items-center mt-[20px]'>
              <h1 className='text-3xl text-default font-header text-center'>Седмичен вот, <br />за най-готини породи!</h1>
              <a href='https://example.com' className='text-default underline'>Виж нашите ToS (Terms of service)</a>
            </div>
          </div>
        </div>
      </div>
      <p className='pt-10'>Made by Denis Hranislavov &copy;</p>
    </div>
  )
}

export default Footer