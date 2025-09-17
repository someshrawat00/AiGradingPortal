import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/result.module.css';
import Button from './Button';

export default function Result() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(90)

  return (
    <div className={styles.container}>
      <div className={styles.resultBox}>
        <div className={styles.left}>
          <div className="">
            <h1>Math Assignment</h1>
            <p>NAME: SOMESH</p>
          </div>
          <Button onClick={() => navigate('/')}>Grade another assignment</Button>
        </div>
        <div className={styles.right}>
          <div
            className={styles.progressCircle}
            style={{ background: `conic-gradient(#251FF660,#C3CEFF80 ${progress}%, #C3CEFF00 0)` }}
          >
          </div>
          <div className={styles.scoreCircle}><span>90</span>/100</div>
        </div>
      </div>
    </div>
  );
}