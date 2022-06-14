import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Project from '../components/Project.js'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {

  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const [emptyEmail, setEmptyEmail] = useState(false)
  const [emptyMsg, setEmptyMsg] = useState(false)
  
  let current = new Date();

  const [time, setTime] = useState(current)


  function handleSend(){
    
    if (emailRef.current.value && messageRef.current.value){
      console.log('api send')
      setEmptyEmail(false)
      setEmptyMsg(false)
    }
    else{
      if (!emailRef.current.value){
        setEmptyEmail(true)
      }
      else{
        setEmptyEmail(false)
      }
  
      if (!messageRef.current.value){
        setEmptyMsg(true)
      }
      else{
        setEmptyMsg(false)
      }
    }
  }

  return (
    <div className=''>

      <Head>
        <title>Danny Doan</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
        
      </Head>
      
      <main className='max-w-3xl mx-auto p-10 mt-12 md:mt-16 text-md md:text-lg dark:text-white'>
        {/* about me section ~ START*/}
        <div>
          <h1 className='text-3xl md:text-4xl'>hey, i&apos;m <span className='text-blue-600 dark:text-[#5585FF]'>danny</span>.</h1>
          <p className='mt-6'>
            i&apos;m a california-based developer studying computer science @uci. i&apos;m a big fan of all things
            full stack whether it be writing RESTful apis in express.js or designing a responsive front end with <span className='line-through'>react.js</span> next.js.
            i like thrillers, sushi, and the la rams.
          </p>

          <p className='mt-6'>currently:</p>
          <p>[cs @uci]</p>
          <p>[sde intern @amazon]</p>
          
          <div className='flex mt-6 space-x-4 md:space-x-8'>
            <a href="https://www.linkedin.com/in/danny-doan/">linkedin↗️</a>
            <a href="https://github.com/dkdoan">github↗️</a>
            <a href="mailto:dannykdoan@gmail.com">email↗️</a>
            
          </div>
         
        </div>
        {/* about me section ~ END */}

        {/* project section ~ START */}
        <h1 className="mt-12 md:mt-16 mb-4">&lt;projects&gt;</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <Project 
            name="aniwatch"
            desc="social media web app that allows users to share and rate what anime they're currently watching.
            uses data from anilist's graphql api."
            tools={["react.js", "express.js", "node.js", "mongoDB", "tailwindcss"]}
          ></Project>

          <Project 
            name="skolr"
            desc="web app that allows users to create and log study sessions following pomodoro 
            techniques."
            tools={["django", "postgreSQL", "html/css", "python", "javascript"]}
          ></Project>
        </div>
        {/* project section ~ END */}

        {/* contact section ~ START*/}
        <h1 className="mt-12 md:mt-16 mb-4">&lt;contact&gt;</h1>
        <div className='bg-slate-300 flex flex-row p-4 rounded-xl dark:bg-[#252525] border border-1 dark:border-[#404040] border-slate-200'>
          
          <div className='flex-[0_0_25%]'>
           <p className='text-sm md:text-base pr-1'>please feel free to contact me regarding anything :)</p>
           

          </div>
          <div className='bg-slate-300 flex-[0_0_75%] flex flex-col min-w-0 pr-2 dark:bg-[#252525]'>

            <input type="text" placeholder='your@email.com' ref={emailRef} className={
              emptyEmail ? 'border border-2 border-red-400 rounded-lg px-2 py-1 dark:bg-neutral-900' : 'rounded-lg px-2 py-1 dark:bg-neutral-900'
            }></input>

            <textarea placeholder="message" className={
              emptyMsg ? 'mt-4 h-24 border border-2 border-red-400 rounded-lg px-2 py-1 dark:bg-neutral-900' :
              'mt-4 h-24 rounded-lg px-2 py-1 dark:bg-neutral-900'
            } 
            ref={messageRef}></textarea>
            <button className='w-24 bg-blue-600 p-2 mt-2 rounded-lg text-white dark:bg-[#5585FF]' onClick={handleSend}>send</button>

          </div>



        </div>

        <footer className='mt-14 md:mt-20 flex justify-center text-sm md:text-base'>
          <p>{"/* built with <3 by me */"}</p>
        </footer>

  
      </main>
      

    </div>
  )
}
