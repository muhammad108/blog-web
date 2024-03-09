import React from 'react'
import "../Login/login.css"
function Login() {
  return (
    <div>
      <div className='login'>
      <span className="title">login</span>
    <form className="login-form">
        <label>Email</label>
        <input type="text" className='login-input' placeholder='ebadk206@gmail.com'/>
        <label>password</label>
        <input type="password" className='login-input' placeholder='password' />
        <button className='login-btn'>login</button>
    </form>
      
      
    </div>
    </div>
  )
}

export default Login
