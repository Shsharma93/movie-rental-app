import React, { Fragment } from 'react';
import Button from '../Button';

const MoviesDetails = props => {
  const handleRedirect = () => {
    props.history.replace('/movies');
  };
  return (
    <Fragment>
      <h1>Movies - {props.match.params.id} </h1>
      <Button text={'save'} click={handleRedirect} />
    </Fragment>
  );
};

export default MoviesDetails;
