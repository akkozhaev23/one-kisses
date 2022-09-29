import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Company from './components/Company';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Registrarion from './components/Registrarion';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/registration" element={<Registrarion />} />
        <Route exact path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
