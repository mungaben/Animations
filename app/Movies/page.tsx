


import React from 'react'
import PostMovie from './components/PostMovie'
import ServerPost from './components/ServerPost'

const page = () => {
  return (
    <main className=' w-full justify-center flex flex-col z-10' >
      <PostMovie/>
      <ServerPost/>
    </main>
  )
}

export default page
