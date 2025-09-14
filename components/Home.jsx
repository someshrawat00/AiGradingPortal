import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>AI Assignment Grading</h1>
      <nav>
        <Link to="/upload">Upload Assignment</Link>
        <Link to="/history">History</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </div>
  );
}