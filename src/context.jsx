import React, { Component } from 'react';
import { getMovies } from './db/fakeMovieService';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    movies: getMovies(),
    deleteMovie: id => {
      const movies = this.state.movies.filter(m => m._id !== id);
      this.setState({ movies });
    }
  };

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
