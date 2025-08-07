import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Checkin from './routes/checkin';
import Admin from './routes/admin';
import './index.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Checkin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
