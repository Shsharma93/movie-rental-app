import React from 'react';
import { Consumer } from '../../context';
import ListItem from './ListItem';

const ListGroup = () => {
  return (
    <Consumer>
      {context => {
        const { genre, activeGenre, handleFilterMovie } = context.state;
        return (
          <ul className='list-group'>
            {genre.map(genre => (
              <ListItem
                classes={
                  genre === activeGenre
                    ? 'list-group-item active'
                    : 'list-group-item'
                }
                key={genre}
                name={genre}
                click={() => handleFilterMovie(genre)}
              />
            ))}
          </ul>
        );
      }}
    </Consumer>
  );
};

export default ListGroup;
