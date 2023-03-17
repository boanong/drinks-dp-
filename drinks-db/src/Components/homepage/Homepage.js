import React, { useState } from 'react';
import './Homepage';
import './Homepage.css';

const Homepage = () => {
const [see, setsee] =useState (true)
  return (
    <div>
      <div class="top-nav">
        <a class="active" href="#home">
        Info
        </a>
        <a href="#hydrangea">Drinks</a>
        <a href="#lavender">API</a>
        <input type="text" placeholder="Search..." className='find'/>
        <a href="rose"><i className="fa-solid fa-user" /></a>
        <div id='menubtn' onClick={() => setsee (!see) }>
          <img src='https://www.lifepng.com/wp-content/uploads/2020/11/Menu-Icon-png-hd.png' alt='menu-button' id='menu' />
      </div>
      </div>
      {see && (       <div id='sidnav'>
        <nav>
          <ul>
            <li> <a href='nav'> Alcohol</a></li>
            <li> <a href='nav'> Beer </a></li>
            <li> <a href='nav'> Soft drinks </a></li>
            <li> <a href='nav'> Wine </a></li>
            <li> <a href='nav'> Whisky </a></li>
          </ul>
        </nav>
      </div>)}
        <div> 
      <div className='hero-image'>

        <h1 className='hero-title'> One platform, a thousand drinks </h1>
        <div className='searchbtn'>
          <form>
            <input type='text' name='' placeholder='Type...' /> 
            <input type='Submit' name='' value='Search...' /> 

          </form>

        </div>
      </div>
      </div>
    </div>

  );
};
export default Homepage;
