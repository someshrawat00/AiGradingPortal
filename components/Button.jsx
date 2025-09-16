import React from 'react';
import styles from './styles/button.module.css';

export default function Button({ children,onClick,style }) {
    return (
        <button className={styles.button} onClick={onClick} style={style}>{children}</button>
    );
}