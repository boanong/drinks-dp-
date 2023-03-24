import React, { useState } from 'react';
import './Homepage';
import './Homepage.css';
import { Link } from 'react-router-dom'

const Homepage = () => {

const [see, setsee] =useState (true)
  return (
    <div>
      <div class="top-nav">
       
      <Link to="/"> 
        <a class="active" href="#home">
        Home
      </a>  
      </Link>
        <a href="#drinks">Drinks</a>
        <a href="#api">API</a>
        <input type="text" placeholder="Search..." className='find'/>
        <a href="icon"><i className="fa-solid fa-user" /></a>
        <div id='menubtn' onClick={() => setsee (!see) }>
          <img src='https://www.lifepng.com/wp-content/uploads/2020/11/Menu-Icon-png-hd.png' alt='menu-button' id='menu' />
      </div>
      </div>
      {see && (    <div id='sidnav'>
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

      <div className='container'>
        <span className='text first-text'> Relax,</span>
        <span className='text sec-text'> and have a drink</span>
      </div>
      </div>
      </div>
    </div>
  );
};
export default Homepage;
