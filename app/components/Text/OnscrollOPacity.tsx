


"use client"


import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OnscrollOPacity = () => {
    const refs = useRef<HTMLElement[]>([]);
    const Containerref = useRef<HTMLDivElement>(null); 
  const phrase="  Please note that this "

    const splitLetters = (word: string) => {
      let letters: React.ReactNode[] = [];
      word.split('').forEach((letter, index) => {
        letters.push(
          <span className=' opacity-20  ' key={letter + '_' + index} ref={(el) => el && refs.current.push(el)}>
            {letter}
          </span>
        );
      });
      return letters;
    };
  
    const splitWords = (phrase: string) => {
      let body: React.ReactNode[] = [];
      phrase.split(' ').forEach((word, index) => {
        const letters = splitLetters(word);
        body.push(
          <p className=' m-1 font-[1000px] text-xl ' key={word + '_' + index}>
            {letters}
          </p>
        );
      });
      return body;
    };



    const CreateAnimation = () => {
        console.log("current ref",refs.current);
        gsap.set(refs.current, { opacity: 0 });
        gsap.to(refs.current, {
            opacity: 1,
            ease: 'none',
           
            stagger:0.8,
            scrollTrigger: {
                trigger: Containerref.current,
                start: 'top 80%',
                end: `+=${window.innerHeight/2 }`,
                scrub: true,
            }
        });

    }



  
    // Use useEffect to access the elements after rendering
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      CreateAnimation()
    }, []);
  


  return (
    <div ref={Containerref} className=' mx-4   justify-center items-center flex flex-wrap  '>
        {
            splitWords(phrase)
        }
    </div>
  )
}

export default OnscrollOPacity