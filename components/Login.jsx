import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Create Password" />
      <button>Login</button>
      <p>
        Don't have an account? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
}