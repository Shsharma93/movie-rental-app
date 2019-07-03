import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ title }) => <th scope='col'>{title}</th>;

export default Heading;

Heading.propTypes = {
  title: PropTypes.string
};
