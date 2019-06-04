import React from 'react';
import Movies from './components/Movies';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <main className='container'>
        <div>
          <Movies />
        </div>
      </main>
    </Provider>
  );
}

export default App;
