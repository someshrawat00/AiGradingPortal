import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Create Password" />
      <input type="password" placeholder="Repeat Password" />
      <button>Signup</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}