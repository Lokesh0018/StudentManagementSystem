import React from 'react';
import Header from './Header/Header';
import Nav from './Navigation/Nav';
import Home from './Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="mainSection">
        <Header />
      <Home />
      </div>
    </div>
  );
}

export default App;
