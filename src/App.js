import React from 'react';
import Home from './pages/Home';

import './App.css'
import { Route, Switch, Redirect, Routes } from "react-router-dom"
import MovieDetails from './pages/movieDetails';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
