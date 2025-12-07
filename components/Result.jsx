import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/result.module.css';
import Button from './Button';
import { ResultContext } from '../contexts/resultContext';
import { useLoading } from '../contexts/LoadingContext';

export default function Result() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(404)
  const { result } = React.useContext(ResultContext);
  const { isLoading } = useLoading();

  useEffect(() => {
    let interval;
    if (!isLoading) {
      interval = setInterval(() => {
        setProgress(result);
      }, 100);
    } else {
      setProgress(404);
    }
    return () => clearInterval(interval);
  }, [isLoading]);


  return (
    <div className={styles.container}>
      <div className={styles.resultBox}>
        <div className={styles.left}>
          <h1>Grading Complete!</h1>
          <div className={styles.topic}><b>Topic:</b> {progress.topic}</div>
          <div className={styles.feedback}><b>Feedback:</b>{progress.feedback}</div>
          <Button onClick={() => navigate('/')}>Grade another assignment</Button>
        </div>
        <div className={styles.right}>
          <div
            className={styles.progressCircle}
            style={{ background: `conic-gradient(#251FF660,#C3CEFF80 ${progress.score * 10}%, #C3CEFF00 0)` }}
          >
          </div>
          <div className={styles.scoreCircle}><span>{progress.score * 10}</span>/100</div>
        </div>
      </div>
    </div>
  );
}