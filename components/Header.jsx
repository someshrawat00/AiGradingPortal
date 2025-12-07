import React from "react";
import styles from "./styles/header.module.css";
import logo from "../assets/logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} width={30}  alt="" />
                        <span>Grading</span>
                    </Link>
                </div>
               {/* <Button><Link to="/login">Login</Link></Button> */}
            </div>
        </div>
    );
}