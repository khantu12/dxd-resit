import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import CarsPage from './pages/CriticalDesignPage';
import HomePage from './pages/HomePage';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/critical-design" element={<CarsPage />} />
      </Routes>
    </div>
  );
};

export default App;
