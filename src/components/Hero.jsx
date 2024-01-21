import React from 'react'
import hero from '../assets/cat-hero.png'
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import styles from './style'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-default pt-[80px] font-text text-primary' id='hero'>
        <div className='max-w-[1240px] h-full mx-auto grid md:grid-cols-2 md:gap-10 gap-0'>
            <div className='w-[100%] h-[90%] flex flex-col justify-center items-start gap-[50px] text-center md:text-start'>
              <h1 className='w-full text-6xl md:text-6xl text-primary font-header'>Коткоистория</h1>
              <p className='font-text'>Добре дошли в Коткоистория, вашият виртуален атлас за удивителни истории, факти и породи котки. Потопете се във вълнуващия свят на котките, където тайнствеността и елегантността привличат.</p>
              <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                <button className={`w-[80%] ${styles.lightRedButton} ${styles.flexButton}`}><a href='#breed' className={`${styles.flexButton}`}>Разгледай породи<GoArrowDownRight size={20}/></a></button>
                <button className={`w-[80%] ${styles.lightRedBorder} ${styles.flexButton}`}><a href='#boxes' className={`${styles.flexButton}`}>С какво помагаме <GoArrowDown size={20}/></a></button>
              </div>
            </div>
            <div className='w-[100%] h-[90%] flex flex-col justify-center items-center'>
              <img src={hero} alt="/" className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Hero