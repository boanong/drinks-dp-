import React from 'react'
import './Signup.css';


const Signup = () => {
  return (
    <div>
        <div className='signup-content'> 
         <div className='heading'> 
            <h2 className='drinky'>DRINKY</h2>
            <h3 className='signup'>Signup to get started</h3>
         </div>
     <div className='form-info'>
      <div className='signup-form'> 
        <p>Firstname</p>
        <input type={Text} className="input" placeholder='enter your first name'></input>
        <p>Lastname</p>
        <input type={Text} className="input" placeholder='enter your lastname'></input>
        <p>Email</p>
        <input type={Text} className="input" placeholder='enter your email'></input>
        <p>Password</p> 
        <input type={Text} className="input" placeholder='enter your password'></input> 
        <button type='button' className='button'>Signup</button>
        </div> 
     </div>
     
      </div>
    </div>  
  )
}

export default Signup
