import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ item }) => <tr>{item}</tr>;

export default Row;

Row.propTypes = {
  item: PropTypes.array
};
