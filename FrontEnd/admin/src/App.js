import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Nav from './Navigation/Nav';
import Home from './Home/Home';
import Students from './Students/Students';
import Student from './Student/Student';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="mainSection">
          <Header />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/students" element={<Students />}/>
          <Route path="/student" element={<Student />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
