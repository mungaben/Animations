

"use client"
import { useInView } from 'react-intersection-observer';


import React, { useRef } from 'react'
import { useScroll } from 'framer-motion';

const Stick = () => {
    const refs = useRef<HTMLDivElement | null>(null)

    const { ref, inView, entry } = useInView({
        threshold: 0.8,
        triggerOnce: true


    })

    useScroll(
        {
            target: refs,

            offset: ["start", "center center"]

        }
    )

    return (
        <div
            ref={ref}
            className=' w-full h-full bg-gradient-to-tl from-fuchsia-100 via-slate-200 to-fuchsia-500 overflow-hidden'
        >
            <div className=' fixed justify-start flex items-start m-5  hover:bg-gradient-to-r from-black to-gray-400 via-green-900 hover:text-transparent hover:bg-clip-text'>
                sticky
            </div>
            <div>
                <div className='  h-[300vh] bg-gradient-to-tl from-fuchsia-100 via-slate-200 to-fuchsia-500 '>
                    <div className=' flex justify-center items-center h-full text-black text-6xl hover:scale-150 leading-10 font-[1000]'>
                        data

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stick