import React from 'react';
import './components/css/App.css';

import AppBar from './components/js/Appbar'
import SearchBar from './components/js/SearchBar'
import Sources from './components/js/Sources'
import CalendarApp from './components/js/Calendar'



function App() {
  return (
    <div className="App">
      <header>
        <AppBar></AppBar>
      </header>
      <div className="appBody">

        <div className="sourcesBody">
          <Sources></Sources>
        </div>

        <div className="calendarBody">
          <div className="searchBar">
            <SearchBar></SearchBar>
          </div>

          <div className="calendarApp">
            <CalendarApp></CalendarApp>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
