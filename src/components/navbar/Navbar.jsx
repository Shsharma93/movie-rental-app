import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark mt-5 mb-5'>
      <Link className='navbar-brand text-light' to='/'>
        MyMDB
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link text-light' to='/movies'>
            Movies
          </NavLink>
          <NavLink className='nav-item nav-link text-light' to='/customers'>
            Customers
          </NavLink>
          <NavLink className='nav-item nav-link text-light' to='rentals'>
            Rentals
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
