import React from 'react'
import TopNav from '../Components/TopNav'
import '../Pages/Signin.css'

export default function Signin() {
  return (
    <div className='sign_in_container'>
      <TopNav />
      <div className='sign-container'>
        <div className='white-container'>
          <h2>Please Log in</h2>
          <input type={Text} className='signing' placeholder='Enter your username or email'/>
          <input type={Text} className='signing' placeholder='Enter your password'/>
          <button type='button' className='sign-in-button'>Sign in</button>
        </div>
      
      </div>
    </div>
  )
}
