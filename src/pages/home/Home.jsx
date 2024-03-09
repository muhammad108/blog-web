import React from 'react'
import Header from '../../header/Header'
import Post from '../../component/posts/Post'
import Sidebar from '../../component/sidebar/Sidebar'
import "../home/home.css"

function Home() {
  return (
    <>
      <Header/>
      <div className='home'>
       <Post/>
       <Sidebar/>
      </div>
    </>
  )
}

export default Home
