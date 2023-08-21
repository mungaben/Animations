import Image from 'next/image'
import OnscrollOPacity from './components/Text/OnscrollOPacity'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">



        <div className=' h-[130vh]'>



          <div className=' h-[1200px]  items-center justify-between flex shadow-2xl'>
            <div className=' mx-auto'>
              <OnscrollOPacity />
            </div>
          </div>

        </div>
    




     
      </div>


    </main>
  )
}
