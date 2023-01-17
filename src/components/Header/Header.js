import React from "react";
import Logo from "./../Logo/Logo";
import Headline from "./../Headline/Headline";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <div className="container">
            <div className={styles.header}>
                <div>
                    <Logo />
                </div>
                <div>
                    <Headline />
                </div>
            </div>
        </div>
    )
}

export default Header;