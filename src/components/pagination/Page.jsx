import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const page = ({ text, onPageChange, classes }) => {
  return (
    <li
      className={classes}
      style={{ cursor: 'pointer' }}
      onClick={onPageChange}
    >
      <NavLink className='page-link' to='/movies'>
        {text}
      </NavLink>
    </li>
  );
};

export default page;

page.propTypes = {
  text: PropTypes.number,
  onPageChange: PropTypes.func,
  classes: PropTypes.string
};
