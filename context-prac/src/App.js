import React from 'react';

import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieListProvider } from './MovieListContext';

function App() {
  return (
    <MovieListProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieListProvider>
  );
}

export default App;
