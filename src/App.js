import React from 'react';
import Movies from './components/Movies';
import { Provider } from './context';
import Pagination from './components/pagination/Pagination';

function App() {
  return (
    <Provider>
      <main className='container'>
        <div>
          <Movies />
          <Pagination />
        </div>
      </main>
    </Provider>
  );
}

export default App;
