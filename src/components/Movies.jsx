import React, { Fragment } from 'react';
import TopRow from './TopRow';
import SubRow from './SubRow';
import Title from './Title';
import { Consumer } from '../context';
import Loader from './loader/Loader';
import Pagination from './pagination/Pagination';
import ListGroup from './list_group/ListGroup';

const Movies = () => {
  return (
    <Consumer>
      {context => {
        const { filteredMovies, loading } = context.state;
        let table = '';
        if (filteredMovies.length > 0) {
          table = (
            <table className='table'>
              <TopRow />
              <SubRow />
            </table>
          );
        }

        let movieTable = (
          <div>
            <ListGroup />
            <Title count={filteredMovies.length} />
            {table}
            <Pagination />
          </div>
        );

        if (loading) {
          movieTable = <Loader />;
        }

        return <Fragment>{movieTable}</Fragment>;
      }}
    </Consumer>
  );
};

export default Movies;
