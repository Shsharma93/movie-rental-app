import React, { Component } from 'react';
import Row from './Row';
import Data from './Data';
import DeleteButton from './DeleteButton';
import { Consumer } from '../context';

class SubRow extends Component {
  render() {
    return (
      <Consumer>
        {context => <tbody>{this.movieData(context.state)}</tbody>}
      </Consumer>
    );
  }

  movieData = state => {
    return state.movies.map(el => (
      <Row key={el._id} item={this.movieRow(el, state.deleteMovie)} />
    ));
  };

  movieRow = (el, deleteMovie) => {
    return [
      <Data type={el.title} />,
      <Data type={el.genre.name} />,
      <Data type={el.numberInStock} />,
      <Data type={el.dailyRentalRate} />,
      <Data type={<DeleteButton del={() => deleteMovie(el._id)} />} />
    ];
  };
}

export default SubRow;
