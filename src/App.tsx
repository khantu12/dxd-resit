import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import getTopCarsForToday from './lib/getTopCarsForToday';
import CarsPage from './pages/CriticalDesignPage';
import HomePage from './pages/HomePage';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = () => {
  useEffect(() => {
    getTopCarsForToday();
  }, []);

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
