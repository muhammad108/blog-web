import React from 'react'
import "../sidebar/sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className="sidebar-item">
    <span className='sidebar-title'>about me</span>
        <img src="https://images.unsplash.com/photo-1646196491764-2262c181d6c3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eXQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nam praesentium. Esse repellendus iusto tenetur qui, est officiis error expedita veritatis distinctio. Iusto odio cupiditate necessitatibus dolor, magnam illo quam.</p>
    </div>
    <div className='sidebar-item'>
    <span className='sidebar-title'>categories</span>
        <ul className='sidebar-list'>
           <li className="list-item">life</li>
           <li className="list-item">music</li>
           <li className="list-item">style</li>
           <li className="list-item">sport</li>
           <li className="list-item">tech</li>
           <li className="list-item">cinema</li>
        </ul>
    </div>
    <div className='sidebar-item'>
    <span className='sidebar-title'>follow us</span>
        <div className="sidebar-social">
        <i className="sidebar-icon fa-brands fa-instagram"></i>
        <i className="sidebar-icon fa-brands fa-facebook"></i>
        <i className="sidebar-icon fa-brands fa-x-twitter"></i>
        <i className="sidebar-icon fa-brands fa-pinterest"></i>
        </div>
    </div>
    </div>
  )
}

export default Sidebar
