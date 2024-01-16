import React from 'react'
import cat1 from '../assets/hero.png'
import cat2 from '../assets/hero.png'
import cat3 from '../assets/hero.png'
import cat4 from '../assets/hero.png'

const Breed = () => {
  return (
    <div className='w-full h-[250vh] md:h-[170vh] bg-default flex justify-center items-center font-text text-primary'>
        <div className='w-[1240px] h-[80%] mx-auto flex flex-col items-center gap-10 bg-blue-500'>
            <div className='flex flex-col text-center p-5 gap-5'>
                <h1 className='text-6xl font-header'>Най-известните породи за 2023</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum est aspernatur odio. Aliquid, quia nobis cupiditate non ut quibusdam. Dolorum est perferendis sapiente in odit ab architecto soluta obcaecati.</p>
            </div>
            <div className='w-full h-full flex flex-wrap md:flex-nowrap flex-row justify-between items-center gap-20'>
                <div className='md:max-w-[600px] h-[500px] text-center bg-green-500 flex flex-col justify-evenly items-center p-10'>
                    <img src={cat1} alt="" />
                    <h1 className="text-2xl">Персийска котка</h1>
                    <p>
                    Те са тихи и спокойни, обичат уют и са приятелски към собствениците си.
                    Известна с късата и компактна структура, персийската котка има къс, гъст и мек пелаж, къс нос и голями, кръгли очи.
                    </p>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                        <button className="w-[50%] py-[15px] px-[25px] bg-blue-500">Button 1</button>
                        <button className='w-[50%] py-[15px] px-[25px] bg-blue-500'>Button 2</button>
                    </div>
                </div>
                <div className='md:max-w-[600px] h-[500px] text-center bg-green-500 flex flex-col justify-evenly items-center p-10'>
                    <img src={cat2} alt="" />
                    <h1 className="text-2xl">Сиамска котка</h1>
                    <p>
                    Известни са с емоционалната си интелигентност, комуникативност и обич към собствениците си.
                    Сиамските котки имат тънък, извит корпус, къса козина, голями уши и аметистови очи.
                    </p>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                        <button className="w-[50%] py-[15px] px-[25px] bg-blue-500">Button 1</button>
                        <button className='w-[50%] py-[15px] px-[25px] bg-blue-500'>Button 2</button>
                    </div>
                </div>
            </div>

            <div className='w-full h-full flex flex-wrap md:flex-nowrap flex-row justify-between items-center gap-20'>
                <div className='md:max-w-[620px] h-[500px] text-center bg-green-500 flex flex-col justify-evenly items-center p-10'>
                    <img src={cat1} alt="" />
                    <h1 className="text-2xl">Мейн Кун</h1>
                    <p>
                    Обичат да бъдат активни и игриви, често се връзват със семействата си и са дружелюбни.
                    Мейн Кун е крупна порода с дълъг корпус, мощни крака и голяма глава. Има къс и гъст пухкав покрив.
                    </p>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                        <button className="w-[50%] py-[15px] px-[25px] bg-blue-500">Button 1</button>
                        <button className='w-[50%] py-[15px] px-[25px] bg-blue-500'>Button 2</button>
                    </div>
                </div>
                <div className='md:max-w-[570px] h-[500px] text-center bg-green-500 flex flex-col justify-evenly items-center p-10'>
                    <img src={cat2} alt="" />
                    <h1 className="text-2xl">Бенгалска котка</h1>
                    <p>
                    Те са енергични, любознателни и игриви. Обичат активните игри и са дружелюбни към семействата си.
                    Бенгалската котка е известна със своите петна и идеята, че прилича на малка леопардова котка. Има къса, гладка и блестяща козина.
                    </p>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                        <button className="w-[50%] py-[15px] px-[25px] bg-blue-500">Button 1</button>
                        <button className='w-[50%] py-[15px] px-[25px] bg-blue-500'>Button 2</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Breed