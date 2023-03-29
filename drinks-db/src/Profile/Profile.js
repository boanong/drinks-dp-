import React from 'react'
import './Profile.css';



const Profile = () => {
  return (
    <div className='whole'>
      <div className='edit-profile-card'> 
        <div className='upper-section'>
             <img className='profile-pic' src='https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt='profile'/>
            <h2>Mark Clerkson</h2>

            <p>clerkson@gmail.com</p>

        </div> 
        <div> 
          
        </div>
        <input
          
         type="text" className='profile-input' value="Enter new name" 
         />
        <input type="tel" className='profile-input' placeholder="Enter your new number" />
        <input type="button" className='submit-button' value="Submit changes" />
        <p className='status'>You are currently registered as a guest user. To change your status click here</p>
      </div>
    </div>
  )
}

export default Profile;
