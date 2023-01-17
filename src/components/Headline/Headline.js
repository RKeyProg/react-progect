import React from "react";
import Button from "./../Button/Button";
import User from "./../User/User";
import styles from "./headline.module.scss";

const Headline = () => {
    return (
        <div className={styles.headline}>
            <div className={styles.user}>
                <User>Username</User>
            </div>
            <Button type="text">Logout</Button>
        </div>
    )
}

export default Headline;