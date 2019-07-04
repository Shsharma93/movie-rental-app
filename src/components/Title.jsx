import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ count }) => (
  <div className='mb-3 ml-5'>
    <h5>Showing {count} movies from database</h5>
  </div>
);

export default Title;

Title.propTypes = {
  count: PropTypes.number
};
