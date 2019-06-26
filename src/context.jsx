import React, { Component } from 'react';
import { getMovies } from './db/fakeMovieService';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    movies: getMovies(),
    itemCount: 9,
    pageSize: 4,
    currentPage: 1,
    deleteMovie: id => {
      const movies = this.state.movies.filter(m => m._id !== id);
      const itemCount = this.state.movies.length - 1;
      let currentPage;
      if (
        this.state.itemCount <=
        this.state.currentPage * this.state.pageSize
      ) {
        currentPage = this.state.currentPage - 1;
      }
      this.setState({ movies, itemCount, currentPage });
    },
    likeMovie: id => {
      const movies = this.state.movies;
      const index = movies.findIndex(m => m._id === id);
      movies[index].liked = movies[index].liked ? false : true;
      this.setState({ movies });
    },
    handlePageChange: page => {
      this.setState({ currentPage: page });
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
