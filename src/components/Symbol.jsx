import React from 'react'
import pyramid from '../assets/hero.png'
import styles from './style'

const Symbol = () => {
  return (
    <div className='w-full h-[100vh] bg-default flex items-center font-text text-primary'>
        <div className='w-[1240px] h-[80%] mx-auto flex flex-col justify-center gap-10 items-center text-center'>
            <img src={pyramid} alt="" className='w-[500px]'/>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-6xl md:text-6xl font-header'>Египет</h1>
                <p className='p-10'>Котките имат дълга история на свързване с Египет, където те не само са били домашни любимци, но и са били възприемани като символични и свещени същества. Ето някои ключови аспекти на тази връзка:
                </p>
                <ol className='list-decimal p-10'>
                  <li><b>Свещена позиция в Египетската Митология: </b>В египетската митология котките имат особено важна роля. Котката богиня Бастет (или Баст) беше божество, свързано с домашния огън, домашното щастие и защитата. Тя често се изобразяваше с глава на котка и беше почитана като богиня на красотата и любовта.</li>
                  <br />
                  <li><b>Домашни Любимци и Символ на Защита: </b>Египтяните често държаха котки като домашни любимци. Те бяха ценени за техния ловен талант, защитното им поведение и за способността им да контролират плъховете, които биха представлявали заплаха за хранителните запаси.</li>
                  <br />
                  <li><b>Културни и Религиозни Влияния: </b>Котките не само бяха част от ежедневния живот в Египет, но и имаха голямо културно и религиозно значение. Символиката на Бастет и ролята на котките бяха важни за обредите и религиозната практика в Древен Египет.</li>
                </ol>
                <button className={`md:w-[20%] ${styles.lightRedButton}`}>Породи</button>
            </div>
        </div>
    </div>
  )
}

export default Symbol