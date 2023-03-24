import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className='edit-profile-card'> 
        <div className='upper-section'>
            <img src='https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='profile-pic'></img>
            <h2>Boanong Joshua</h2>
            <p>Admin user</p>
        </div>
        <input type={Text} placeholder='Enter new username'></input>
        <input type={'tel'} placeholder='Enter new phone number'></input>
        <input type={'button'} className='button'>Save Changes</input>
      
      </div>
    </div>
  )
}

export default Profile
