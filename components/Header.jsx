import React from "react";
import styles from "./styles/header.module.css";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <div>
            <h1 className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} width={30}  alt="" />
                    <span>Grading</span>
                </div>
            </h1>
        </div>
    );
}