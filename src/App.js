import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList';
import Header from './components/Header.js';
import Homepage from './components/auth/Homepage.js'
import { listItems, WorkoutList } from './components/ListDemo';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path='/' render={props => <Homepage {...props} />} />
      <ul>{listItems}</ul>
      <div>
        <WorkoutList />
      </div>
      <hr />
      <DynamicMoviesList />
    </div>
  );
}

export default App;
