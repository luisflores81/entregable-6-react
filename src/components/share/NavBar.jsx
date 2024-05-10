import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBar.css';

const NavBar = () => {
  return (
    <header className='navbar'>
        <h1 className='vavbar__title'><Link to='/'>E-commerce</Link></h1>  
     <ul className='vavbar__list'>
         <li className='vavbar__item'><Link to='/login'>Login</Link></li>
         <li className='vavbar__item'><Link to='/purchases'>Purchase</Link></li>
         <li className='vavbar__item'><Link to='/cart'>Cart</Link></li>
      </ul>
     </header> 
    
  )
}

export default NavBar;
