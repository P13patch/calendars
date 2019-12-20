import React from 'react';
import './App.css';

import AppBar from './components/js/Appbar'
import SearchBar from './components/js/SearchBar'



function App() {
  return (
    <div className="App">
      <header>
        <AppBar></AppBar>
      </header>
      <div>
        <SearchBar></SearchBar>
        <div>Calendar</div>
      </div>

    </div>
  );
}

export default App;
