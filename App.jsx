import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
import Result from './components/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;