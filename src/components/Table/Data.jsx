import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Data = ({ type, movieTitle }) => {
  let cellElement = type;
  if (movieTitle) {
    cellElement = <Link to={`/movies/${type._id}`}>{type.title}</Link>;
  }

  return (
    <Fragment>
      <td>{cellElement}</td>
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
