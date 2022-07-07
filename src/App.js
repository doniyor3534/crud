
import './App.css';
import React from 'react';
import Saitbar from './Saitbar/Saitbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './Overview/Overview';
import Worker from './Worker/Worker'
import Cards from './Cards/Cards';
import Goals from './Goals/Goals';
import Settings from './Settings/Settings'
import Navbar from './Navbar/Navbar';

function App() {

  return (
    <div className='app'>
      <Router>
        <Saitbar />
        <div className="home">
          <Navbar />
          <Routes>
            <Route path={'/'} element={<Overview />} />
            <Route path={'/worker'} element={<Worker />} />
            <Route path={'/cards'} element={<Cards />} />
            <Route path={'/goals'} element={<Goals />} />
            <Route path={'/settings'} element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
