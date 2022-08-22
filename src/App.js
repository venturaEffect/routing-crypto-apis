import React from 'react';
import Nav from './Nav';
import About from './About';
import Trending from './Trending';
import CoinId from './CoinId';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes >
            <Route path='/about' exact element={<About />}/>
            <Route path='/trending' exact element={<Trending />}/>
            <Route path='/trending/:id'  element={<CoinId />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
