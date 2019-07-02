import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Data = ({ type }) => {
  return (
    <Fragment>
      <td>{type}</td>
    </Fragment>
  );
};

export default Data;

Data.propTypes = {
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};
