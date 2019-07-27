import React from 'react';
import Row from './Row';
import Data from './Data';
import Button from '../Button';
import { Consumer } from '../../context';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import paginate from '../../Utils/paginate';
import uuid from 'uuid/v4';

const SubRow = () => {
  const movieRow = (el, deleteMovie, likeMovie) => {
    const color = el.liked ? '#dc3545' : 'grey';
    return [
      <Data type={el} key={uuid()} movieTitle />,
      <Data type={el.genre.name} key={uuid()} />,
      <Data type={el.numberInStock} key={uuid()} />,
      <Data type={el.dailyRentalRate} key={uuid()} />,
      <Data
        type={
          <Button
            icon={faHeart}
            classes='btn'
            color={color}
            click={() => likeMovie(el._id)}
          />
        }
        key={uuid()}
      />,
      <Data
        type={
          <Button
            click={() => deleteMovie(el._id)}
            text='Delete'
            classes='btn btn-danger btn-sm'
          />
        }
        key={uuid()}
      />
    ];
  };

  const movieData = state => {
    const movies = paginate(
      state.filteredMovies,
      state.currentPage,
      state.pageSize
    );
    return movies.map(el => (
      <Row
        key={el._id}
        item={movieRow(el, state.deleteMovie, state.likeMovie)}
      />
    ));
  };

  return (
    <Consumer>{context => <tbody>{movieData(context.state)}</tbody>}</Consumer>
  );
};

export default SubRow;
