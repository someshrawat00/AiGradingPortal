import React from 'react';
import { Routes, Route } from 'react-router-dom';
import History from './components/History';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
import Result from './components/Result';
import { LoadingProvider } from './contexts/LoadingContext';

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </LoadingProvider>
  );
}

export default App;