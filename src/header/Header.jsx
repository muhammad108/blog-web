import React from "react"
import "../header/header.css"

function Header() {
  return (
    <div className='header'>
    <div className="header-titles">
        <span className='header-sm'>React & Node</span>
        <span className='header-lg'>Blog</span>
    </div>
        <img className='header-img' src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"alt="" />
    </div>
  )
}

export default Header

