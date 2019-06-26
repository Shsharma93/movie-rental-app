import React from 'react';
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
