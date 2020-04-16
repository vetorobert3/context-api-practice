import React from 'react';

import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieListProvider } from './MovieListContext';
import AddMovie from './AddMovie';

function App() {
  return (
    <MovieListProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieListProvider>
  );
}

export default App;
