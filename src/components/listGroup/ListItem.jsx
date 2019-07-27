import React from 'react';

const ListItem = ({ classes, name, click }) => (
  <li className={classes} style={{'cursor':'pointer'}} onClick={click}>
    {name}
  </li>
);

export default ListItem;
