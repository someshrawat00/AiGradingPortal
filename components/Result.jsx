import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/result.module.css';
import Button from './Button';

export default function Result() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.resultBox}>
        <h1>Math Assignment</h1>
        <p>Student: Xyz</p>
        <div className={styles.scoreCircle}>90/100</div>
        <Button onClick={() => navigate('/')}>Grade another assignment</Button>
      </div>
    </div>
  );
}