import React, { Component } from 'react';
import { getMovies } from './db/fakeMovieService';
import { getGenres } from './db/fakeGenreService';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    movies: [],
    filteredMovies: [],
    itemCount: 0,
    pageSize: 4,
    currentPage: 1,
    genre: [],
    activeGenre: '',
    loading: true,
    deleteMovie: id => {
      const {
        filteredMovies,
        movies,
        itemCount,
        pageSize,
        currentPage
      } = this.state;
      const moviesList = movies.filter(m => m._id !== id);
      const filteredMoviesList = filteredMovies.filter(m => m._id !== id);
      const movieCount = filteredMoviesList.length;
      const totalPages = Math.ceil(itemCount / pageSize);
      let currentPageNumber = currentPage;
      if (itemCount % pageSize === 1 && currentPage === totalPages) {
        currentPageNumber = currentPage - 1;
      }
      this.setState({
        movies: moviesList,
        itemCount: movieCount,
        currentPage: currentPageNumber,
        filteredMovies: filteredMoviesList
      });
    },
    likeMovie: id => {
      const movies = this.state.movies;
      const index = movies.findIndex(m => m._id === id);
      movies[index].liked = movies[index].liked ? false : true;
      this.setState({ movies });
    },
    handlePageChange: page => {
      this.setState({ currentPage: page });
    },
    handleFilterMovie: name => {
      let filteredMovies = [];
      if (name === this.state.genre[0]) {
        filteredMovies = this.state.movies;
      } else {
        filteredMovies = this.state.movies.filter(
          movie => movie.genre.name === name
        );
      }

      this.setState({
        activeGenre: name,
        filteredMovies,
        itemCount: filteredMovies.length,
        currentPage: 1
      });
    }
  };

  componentDidMount = () => {
    const movies = getMovies();
    const genre = ['All Genre'];
    const filterOptions = getGenres();

    filterOptions.forEach(g => genre.push(g.name));
    this.setState({
      movies,
      genre,
      loading: false,
      activeGenre: genre[0],
      filteredMovies: movies,
      itemCount: movies.length
    });
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
