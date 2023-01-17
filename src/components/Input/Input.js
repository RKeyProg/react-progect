import React from "react";
import styles from './input.module.scss';

const Input = props => {
    return (
        <input
            className={styles.input}
            placeholder={props.title}
        />
    )
}

export default Input;