import React, { createContext, useContext, useState, useCallback } from 'react';
import styles from '../components/styles/loading.module.css';

const LoadingContext = createContext({
  isLoading: false,
  showLoading: () => { },
  hideLoading: () => { },
  LoadingOverlay: () => null,
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading...');

  const showLoading = useCallback((text = 'Loading...') => {
    setLoadingText(text);
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
    setLoadingText('Grading Assignment');
    setInterval(() => { setLoadingText('Wait a second'); }, 200);
  }, []);

  const LoadingOverlay = () => {
    if (!isLoading) return null;

    return (
      <div className={styles.loadingOverlay}>
        <div className={styles.loadingText}>
          <div className={styles.spinner}>
            <img src="../../assets/star-bg.jpg" alt="" />
          </div>
          <div className={styles.loadingTextContent}>
            <p>{loadingText}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading, LoadingOverlay }}>
      {children}
      <LoadingOverlay />
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export default LoadingContext;
