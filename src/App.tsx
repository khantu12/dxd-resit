import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import HomePage from './pages/HomePage';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CriticalDesignPage from './pages/CriticalDesignPage';
import StoryCreationPage from './pages/StoryCreationPage';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/critical-design" element={<CriticalDesignPage />} />
        <Route path="/story-creation" element={<StoryCreationPage />} />
      </Routes>
    </div>
  );
};

export default App;
