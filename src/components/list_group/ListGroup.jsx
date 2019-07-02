import React from 'react';
import { Consumer } from '../../context';
import ListItem from './ListItem';

const ListGroup = () => {
  return (
    <Consumer>
      {context => {
        const { genre } = context.state;
        const filterOptions = ['All Genre'];
        genre.forEach(genre => filterOptions.push(genre.name));
        return (
          <ul className='list-group'>
            {filterOptions.map(genre => (
              <ListItem classes='list-group-item' key={genre} name={genre} />
            ))}
          </ul>
        );
      }}
    </Consumer>
  );
};

export default ListGroup;
