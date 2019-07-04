import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const page = ({ text, onPageChange, classes }) => {
  return (
    <li className={classes} style={{'cursor':'pointer'}} onClick={onPageChange}>
      <Link className='page-link' to='' >
        {text}
      </Link>
    </li>
  );
};

export default page;

page.propTypes = {
  text: PropTypes.number,
  onPageChange: PropTypes.func,
  classes: PropTypes.string
};
