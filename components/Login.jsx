import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/auth.module.css';
import Button from './Button';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h1>LOGIN</h1>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Create Password" />
        <Button>Login</Button>
      </div>
      <p>
        Don't have an account? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
}