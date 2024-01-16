import React from 'react'
import hero from '../assets/hero.png'
import { CiDesktopMouse2 } from "react-icons/ci";

const Family = () => {
  return (
    <div className='w-full h-[100vh] bg-default text-primary font-text'>
        <div className='max-w-[1240px] h-full mx-auto grid md:grid-cols-2 md:gap-10 gap-0 pt-[80px]'>
            <div className='w-[100%] h-[90%] flex flex-col justify-center items-start gap-[50px] text-center'>
              <h1 className='w-full text-6xl md:text-6xl font-header'>Семейство</h1>
              <p>Котките (Felidae) принадлежат към семейство от бозайници, наричано "Коткообразни" или "Котешки". Това семейство включва разнообразни видове, най-известните от които са домашната котка (Felis catus) и дивите котки, като лъвове, тигри, леопарди и други. </p>
              <ol className='list-decimal'>
                <li><b>Разнообразие от Видове:</b> Семейството включва над 40 различни видове котки, разпределени по целия свят, с различни размери, форми и характеристики.</li>
                <li><b>Хищници по Природа:</b> Котките са известни като хищници, като техните анатомични особености, като остри като мачете зъби и когти, ги правят ефективни ловци.</li>
                <li><b>Нощни Ловци:</b> Голяма част от котките са активни нощни ловци, което означава, че са способни да виждат при слаба осветеност и имат отлично развито чувство за слух и обоняние.</li>
              </ol>
              <div className='w-full text-center mouse-animation-class'>
                  <CiDesktopMouse2 className='w-full text-center text-red-500' size={60}/>
              </div>
            </div>
            <div className='w-[100%] h-[90%] flex flex-col justify-center items-center'>
              <img src={hero} alt="/" className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Family