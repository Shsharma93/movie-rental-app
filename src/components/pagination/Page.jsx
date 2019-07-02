import React from 'react';
import PropTypes from 'prop-types';

const page = ({ text, onPageChange, classes }) => {
  return (
    <li className={classes}>
      <a className='page-link' onClick={onPageChange}>
        {text}
      </a>
    </li>
  );
};

export default page;

page.propTypes = {
  text: PropTypes.number,
  onPageChange: PropTypes.func,
  classes: PropTypes.string
};
