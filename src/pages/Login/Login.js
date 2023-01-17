import React from 'react';
import styles from './login.module.scss';
import bg from './../../images/loginBG.jpg';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login__bg}>
                <img src={bg} alt="Background" />
            </div>
            <div className={styles.login__content}>
                <form action="" className={styles.form} id="myForm">
                    <h1 className={styles.form__title}>Log in</h1>
                    <div className={styles.form__row}>
                        <Input title="Enter your name" />
                    </div>
                    <div className={styles.form__row}>
                        <Input title="Enter password" />
                    </div>
                    <div className={styles.form__btn}>
                        <Button type="submit">Continue</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;