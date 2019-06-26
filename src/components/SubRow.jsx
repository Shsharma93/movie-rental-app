import React from 'react';
import Row from './Row';
import Data from './Data';
import Button from './Button';
import { Consumer } from '../context';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import paginate from '../Utils/paginate';

const SubRow = () => {
  const movieRow = (el, deleteMovie, likeMovie) => {
    const color = el.liked ? 'green' : 'grey';
    return [
      <Data type={el.title} />,
      <Data type={el.genre.name} />,
      <Data type={el.numberInStock} />,
      <Data type={el.dailyRentalRate} />,
      <Data
        type={
          <Button
            icon={faHeart}
            classes='btn'
            color={color}
            click={() => likeMovie(el._id)}
          />
        }
      />,
      <Data
        type={
          <Button
            click={() => deleteMovie(el._id)}
            text='Delete'
            classes='btn btn-danger btn-sm'
          />
        }
      />
    ];
  };

  const movieData = state => {
    const movies = paginate(state.movies, state.currentPage, state.pageSize);
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
