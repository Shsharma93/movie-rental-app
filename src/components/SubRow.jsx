import React from 'react';
import Row from './Row';
import Data from './Data';
import DeleteButton from './DeleteButton';
import { Consumer } from '../context';

const SubRow = () => {
  const movieRow = (el, deleteMovie) => {
    return [
      <Data type={el.title} />,
      <Data type={el.genre.name} />,
      <Data type={el.numberInStock} />,
      <Data type={el.dailyRentalRate} />,
      <Data type={<DeleteButton del={() => deleteMovie(el._id)} />} />
    ];
  };

  const movieData = state => {
    return state.movies.map(el => (
      <Row key={el._id} item={movieRow(el, state.deleteMovie)} />
    ));
  };

  return (
    <Consumer>{context => <tbody>{movieData(context.state)}</tbody>}</Consumer>
  );
};

export default SubRow;
