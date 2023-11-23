import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

//pages

import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Register from './pages/register-login/Register';
import Login from './pages/register-login/Login'

//app
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/register" element={ <Register /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="*" element={ <Login/> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
