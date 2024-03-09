import React from 'react'
import "../topbar/topbar.css"
import { NavLink } from 'react-router-dom'

function Topbar() {
  const user = false;
  return (
    <div className='top'>
      <div className='top-left'>
      <i className="top-icon fa-brands fa-instagram"></i>
      <i className="top-icon fa-brands fa-facebook"></i>
      <i className="top-icon fa-brands fa-x-twitter"></i>
      <i className="top-icon fa-brands fa-pinterest"></i>
      </div>
      <div className="top-center">
          <ul className='top-list'>
          <li className='toplistitem'><NavLink className="link" to="/">home</NavLink></li>
          <li className='toplistitem'><NavLink className="link" to="/about">about</NavLink></li>
          <li className='toplistitem'><NavLink className="link" to="/contact">contact</NavLink></li>
          <li className='toplistitem'><NavLink className="link" to="/write">write</NavLink></li>
          <li className='toplistitem'>{user && "logout"}</li>
          </ul>
      </div>
      <div className='top-right'>
      {
        user ?(
        <img className='top-img' src="https://images.unsplash.com/photo-1652795385719-3164c3dd8d14?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhcmNoJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" />

        ):(
          <ul className='top-list'>
        <li className='toplistitem'><NavLink className="link" to="/login">Login</NavLink></li>
        </ul>
        )
      }
        <i className="search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
export default Topbar
