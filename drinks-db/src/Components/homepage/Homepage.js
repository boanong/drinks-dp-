import React from 'react';
import './Homepage';
import './Homepage.css';

const Homepage = () => {
  return (
    <div>
      <div class="top-nav">
        <a class="active" href="#home">
        <i class="fa-solid fa-bars" />
        </a>
        <a href="#hydrangea">Drinks</a>
        <a href="#lavender">API</a>
        <input type="text" placeholder="Search.." className='search'/>
        <a href="rose"><i className="fa-solid fa-user" /></a>
      </div>
      <h1> Welcome to the Home Page </h1>
      <i className="fa-solid fa-user" />
    </div>
  );
};
export default Homepage;
