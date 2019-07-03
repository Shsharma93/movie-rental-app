import React from 'react';

const ListItem = ({ classes, name, click }) => <li className={classes} onClick={click}>{name}</li>;

export default ListItem;
