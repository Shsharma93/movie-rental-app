import React, { Fragment } from 'react';
import TopRow from './Table/TopRow';
import SubRow from './Table/SubRow';
import Title from './Title';
import { Consumer } from '../context';
import Loader from './loader/Loader';
import Pagination from './pagination/Pagination';
import ListGroup from './listGroup/ListGroup';

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
          <div className='row'>
            <div className='col-2 mt-5 mr-5'>
              <ListGroup />
            </div>
            <div className='col'>
              <Title count={filteredMovies.length} />
              {table}
              <Pagination />
            </div>
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
