import React, { Component } from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router>
      </Router>
    </BrowserRouter>
  );
}

export default App;
