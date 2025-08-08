import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Checkin from './routes/checkin';
import Admin from './routes/admin';
import './index.scss';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}


export default App;
