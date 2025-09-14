import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Math Assignment</h1>
      <p>Student: Xyz</p>
      <div className="score-circle">90/100</div>
      <button onClick={() => navigate('/upload')}>Grade another assignment</button>
    </div>
  );
}