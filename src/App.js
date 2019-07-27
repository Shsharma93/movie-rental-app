import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from './components/Movies';
import Customers from './components/customers/Customers';
import Rentals from './components/rentals/Rentals';
import Navbar from './components/navbar/Navbar';
import NotFound from './components/notFound/NotFound';
import MoviesDetails from './components/moviesInfo/MoviesDetails';

const App = () => {
  return (
    <Fragment>
      <main className='container'>
        <Navbar />
        <Switch>
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/movies/:id' component={MoviesDetails} />
          <Route exact path='/movies' component={Movies} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </Fragment>
  );
};
export default App;
