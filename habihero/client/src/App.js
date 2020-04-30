import React from 'react';
import './App.css';
// import './fonts/franxurter.ttf';
// import './fonts/franxurter-fat.ttf';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import TigerEnvironment from './pages/TigerEnvironment';
import MathModal from './components/MathModal'

function App() {
  return <BrowserRouter>
    <div className="App">
      
      <Route path="/" exact component={Home} />
      <Route path="/timtiger" component={TigerEnvironment} />
      <Route path="/testing" component={MathModal} />
    </div>
  </BrowserRouter>
}

export default App;
