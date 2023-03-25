import React from 'react'
import './Profile.css';



const Profile = () => {
  return (
    <div className='whole'>
      <div className='edit-profile-card'> 
        <div className='upper-section'>
            <img className='profile-pic' src='https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt='profile-image'/>
            <h1>Boanong Joshua</h1>

            <p>clerkson@gmail.com</p>

        </div>
      </div>
    </div>
  )
}

export default Profile;
