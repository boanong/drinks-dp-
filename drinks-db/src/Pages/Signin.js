import React from 'react'
import './Signin.css';

export default function Signin() {
  return (
    <div>
      <div className='sign'> 
         <div className='heading'> 
            <h2 className='drinky'>DRINKY</h2>
            <h3 className='signup'>Signup to get started</h3>
         </div>
     <div className='form-info'>
      <div className='signup-form'>   
        <p>Username</p>
        <input type={Text} className="input" placeholder='enter your first name'></input>
        <p>Password</p>
        <input type={Text} className="input" placeholder='enter your lastname'></input>
       
        <button type='button' className='button'>Signup</button>
        </div> 
     </div>
     
      </div>
    </div>
  )
}
