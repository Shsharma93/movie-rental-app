import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ click, text, icon, classes, color }) => {
  const btnText = icon ? (
    <FontAwesomeIcon icon={icon} color={color} size='lg' />
  ) : (
    text
  );
  return (
    <button onClick={click} type='button' className={classes}>
      {btnText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.object,
  classes: PropTypes.string,
  color: PropTypes.string
};
