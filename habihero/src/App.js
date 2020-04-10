import React from 'react';
import './App.css';
import './fonts/franxurter.ttf';
// import './fonts/franxurter-fat.ttf';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import TigerEnvironment from './pages/TigerEnvironment';

function App() {
  return <BrowserRouter>
    <div className="App">
      {/* <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </header> */}

      <Route path="/" exact component={Home} />
      <Route path="/timtiger" component={TigerEnvironment} />
    </div>
  </BrowserRouter>
}

export default App;
