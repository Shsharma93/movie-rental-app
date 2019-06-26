import React from 'react';

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
