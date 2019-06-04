import React from 'react';
import TopRow from './TopRow';
import SubRow from './SubRow';
import Title from './Title';
import { Consumer } from '../context';

const Movies = () => {
  return (
    <Consumer>
      {context => {
        const { movies } = context.state;
        let table = '';
        if (movies.length > 0) {
          table = (
            <table className='table'>
              <TopRow />
              <SubRow />
            </table>
          );
        }
        return (
          <div>
            <Title count={movies.length} />
            {table}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Movies;
