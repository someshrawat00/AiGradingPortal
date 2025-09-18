import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/auth.module.css';
import Button from './Button';

export default function Signup() {
  return (
    <div className={styles.container}>
      <h1>SIGN UP</h1>
      <div className={styles.formBox}>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Create Password" />
        <input type="password" placeholder="Repeat Password" />
        <Button >Signup</Button>
      </div>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}