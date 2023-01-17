import React from "react";
import styles from "./user.module.scss";

const User = ({ children }) => {
    return (
        <div>
            <span className={styles.user__name}>{children}</span>
        </div>
    )
}

export default User;