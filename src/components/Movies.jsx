import React from 'react';
import TopRow from './TopRow';
import SubRow from './SubRow';
import Title from './Title';
import { Consumer } from '../context';

const Movies = () => {
  return (
    <Consumer>
      {context => (
        <div>
          <Title count={context.state.movies.length} />
          <table className='table'>
            <TopRow />
            <SubRow />
          </table>
        </div>
      )}
    </Consumer>
  );
};

export default Movies;
