import React from 'react'
import { FaStar } from "react-icons/fa";
import styles from './style';
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";

const Boxes = () => {
  return (
    <div className='w-full h-[105vh] md:h-[70vh] pt-10 bg-default font-text text-primary'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center pt-[20px] gap-20'>
            <h1 className='text-6xl text-center font-header'>Защо коткоистория</h1>
            <div className='max-w-[1240px] flex flex-row flex-wrap items-center justify-center md:justify-between gap-10'>
                <div className={`w-[300px] h-[350px] flex flex-col justify-evenly items-center p-5 text-center border-2 border-pink-500 border-dashed rounded-xl shadow-2xl ${styles.hoverBox}`}>
                    <IoSearch size={40} />
                    <h1 className='text-xl'>Изследвайте света на котките</h1>
                    <p>"Коткоистория" е вашето входно билетче към разнообразния и удивителен свят на котките. Открийте породите, уникалните им характеристики и как да ги разбирате по-добре.</p>
                </div>
                {/* Second Card */}
                <div className={`w-[300px] h-[350px] flex flex-col justify-evenly items-center p-5 text-center border-2 border-pink-500 border-dashed rounded-xl shadow-2xl ${styles.hoverBox}`}>
                    <FaHeart size={40}/>
                    <h1 className='text-xl'>Създайте неразрушима връзка с вашата котка</h1>
                    <p>Повишете връзката си с котката си, разбирайки нейните нужди и език. "Коткоистория" ви подпомага да създадете по-близка връзка с вашия домашен любимец.</p>
                </div>
                <div className={`w-[300px] h-[350px] flex flex-col justify-evenly items-center p-5 text-center border-2 border-pink-500 border-dashed rounded-xl shadow-2xl ${styles.hoverBox}`}>
                    <LuRefreshCw size={40}/>
                    <h1 className='text-xl'>Обновяване на Съдържание</h1>
                    <p>"Коткоистория" ви предлага непрекъснато обновяване на съдържанието с нови и интересни теми. Без значение дали сте нов собственик на котка или ветеран в света на котките.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Boxes