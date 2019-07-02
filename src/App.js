import React from 'react';
import Movies from './components/Movies';
import { Provider } from './context';
import Pagination from './components/pagination/Pagination';
import ListGroup from './components/list_group/ListGroup';

function App() {
  return (
    <Provider>
      <main className='container'>
        <div>
          <ListGroup />
          <Movies />
          <Pagination />
        </div>
      </main>
    </Provider>
  );
}

export default App;
