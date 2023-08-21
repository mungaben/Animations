


"use client"

import { motion } from 'framer-motion';
import React from 'react'


import {  useInView } from 'react-intersection-observer';


const phrases = [
    "Software development is fun.",
    "Programming languages are powerful tools.",
    "Coding improves problem-solving skills.",
   
    "JavaScript is the language of the web.",
    "Learning is a continuous journey.",
  ];

const MaskText = () => {

const { ref,inView,entry}=useInView({
    threshold:0.8
})
console.log("in view",inView);
console.log(" entry",entry);

const animation ={
    initial:{y:"80%",x:"-50%",color:"white"},
    enter:(i: number) => ({y: "0", x:"0",blur, scale:"1", border:"2",  transition: {duration: 2, ease: [0.33, 1, 0.68, 1],  delay: 0.0075 * i}})
}

  return (
    <div  className=' '
    ref={ref}
    
    style={{
        
    }}
    >
        {
            phrases.map((phrase,index)=><div key={index}>
                <motion.p className= {` font-bold overflow-hidden text-4xl  translate-x-36    `}
          
                
                variants={animation}
                initial="initial"
                animate={
                    inView ?"enter":""

                }
                
                >
                    { phrase}
                </motion.p>

            </div>)
        }
    </div>
  )
}

export default MaskText