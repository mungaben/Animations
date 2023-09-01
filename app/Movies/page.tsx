


import React from 'react'
import PostMovie from './components/PostMovie'
import ServerPost from './components/ServerPost'

const page = () => {
  return (
    <main className=' w-full justify-center flex flex-col'>
      <PostMovie/>
      <ServerPost/>
    </main>
  )
}

export default page
