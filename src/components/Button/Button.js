import React from "react";
import styles from "./button.module.scss";

const Button = props => {
    switch (props.type) {
        case "submit":
            return (
                <button type="submit" className={styles.btn}>{props.children}</button>
            );
        case "text":
            return (
                <button type="button" className={styles.text}>{props.children}</button>
            );
        default:
            return (
                <button type="button" className={styles.btn}>{props.children}</button>
            );
    }
}

export default Button;