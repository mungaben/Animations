


import Link from 'next/link'
import React from 'react'

const NavTop = () => {
  return (
    <div className=' fixed top-0 w-full'>
      <nav className="flex  flex-col items-center justify-between p-24 pt-5">
        <div className=' mt-0  flex justify-even w-full items-center  gap-10  '>
          <div>
            <Link href={"/Textscroll"}>
              TextScrolls
            </Link>

          </div>
          <div>
            <Link href={"/TextMask"}>

              TextMask
            </Link>

          </div>
          <div>
            <Link href={"/StickyScroll"}>
              StikyScroll
            </Link>


          </div>
          <div>
            <Link href={"/Starg"}>

            Starg
            </Link>


          </div>
          </div>


        animations



      </nav>




    </div>

  )
}

export default NavTop