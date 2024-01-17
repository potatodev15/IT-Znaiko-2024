import React from 'react'
import cat1 from '../assets/persian.png'
import cat2 from '../assets/siamska.png'
import cat3 from '../assets/main-kun.png'
import cat4 from '../assets/bengal.png'
import styles from './style'

const Breed = () => {
  return (
    <div className='w-full h-[250vh] md:h-[200vh] bg-default flex flex-col justify-center items-center font-text text-primary pr-10' id='breed'>
        <div className='w-[1240px] h-[80%] mx-auto flex flex-col items-center gap-10 pt-[120px]'>
            <div className='flex flex-col text-center p-5 gap-5'>
                <h1 className='text-6xl font-header'>Най-известните породи за 2023</h1>
                <p>Според вътрешната статистика за 2023 г., най-известните породи котки включват Персийска, Бенгалска, Мейн Кун и Сиамска. Тези породи продължават да печелят популярност сред обичайните любители на котки.</p>
            </div>
            <div className='w-full h-full flex flex-wrap md:flex-nowrap flex-row justify-between items-center gap-20'>
                <div className='md:max-w-[600px] h-[500px] text-center border-2 border-pink-500 border-dashed rounded-md shadow-2xl flex flex-col justify-between items-center p-10'>
                    <img src={cat1} alt="" className='w-[200px]'/>
                    <h1 className="text-2xl">Персийска котка</h1>
                    <p>
                    Те са тихи и спокойни, обичат уют и са приятелски към собствениците си.
                    Известна с късата и компактна структура, персийската котка има къс, гъст и мек пелаж, къс нос и голями, кръгли очи.
                    </p>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                        <button className={`w-[50%] ${styles.lightRedButton} ${styles.flexButton}`}>Осинови</button>
                        <button className={`w-[50%] ${styles.lightRedBorder} ${styles.flexButton}`}>Разгледай още</button>
                    </div>
                </div>
                <div className='md:max-w-[620px] w-[620px] h-[500px] text-center border-2 border-pink-500 border-dashed rounded-md shadow-2xl flex flex-col justify-evenly items-center p-10'>
                    <img src={cat2} alt="" className='w-[150px]'/>
                    <h1 className="text-2xl">Сиамска котка</h1>
                    <p>
                    Известни са с емоционалната си интелигентност, комуникативност и обич към собствениците си.
                    Сиамските котки, къса козина, големи уши и аметистови очи.
                    </p>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                        <button className={`w-[50%] ${styles.lightRedButton} ${styles.flexButton}`}>Осинови</button>
                        <button className={`w-[50%] ${styles.lightRedBorder} ${styles.flexButton}`}>Разгледай още</button>
                    </div>
                </div>
            </div>

            <div className='w-full h-full flex flex-wrap md:flex-nowrap flex-row justify-between items-center gap-20'>
                <div className='md:max-w-[620px] h-[500px] text-center border-2 border-pink-500 border-dashed rounded-md shadow-2xl flex flex-col justify-evenly items-center p-10'>
                    <img src={cat3} alt="" className='w-[250px]'/>
                    <h1 className="text-2xl">Мейн Кун</h1>
                    <p>
                    Обичат да бъдат активни и игриви, често се връзват със семействата си и са дружелюбни.
                    Мейн Кун е крупна порода с дълъг корпус, мощни крака и голяма глава.
                    </p>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                        <button className={`w-[50%] ${styles.lightRedButton} ${styles.flexButton}`}>Осинови</button>
                        <button className={`w-[50%] ${styles.lightRedBorder} ${styles.flexButton}`}>Разгледай още</button>
                    </div>
                </div>
                <div className='md:max-w-[570px] h-[500px] text-center  border-2 border-pink-500 border-dashed rounded-md shadow-2xl flex flex-col justify-evenly items-center p-10'>
                    <img src={cat4} alt="" className='w-[250px]'/>
                    <h1 className="text-2xl">Бенгалска котка</h1>
                    <p>
                    Те са енергични, любознателни и игриви. Обичат активните игри и са дружелюбни към семействата си.
                    Бенгалската котка е известна със своите петна и идеята, че прилича на малка леопардова котка. Има къса, гладка и блестяща козина.
                    </p>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                        <button className={`w-[50%] ${styles.lightRedButton} ${styles.flexButton}`}>Осинови</button>
                        <button className={`w-[50%] ${styles.lightRedBorder} ${styles.flexButton}`}>Разгледай още</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Breed