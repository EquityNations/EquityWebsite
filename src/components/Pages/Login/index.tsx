import React, { useState } from 'react';
import classes from './login.module.css';
import commonClasses from '../../commons/loginSignupCss/common.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const eyeIcon = <FontAwesomeIcon icon={faEye} size='1x' />;
const eyeSlashIcon = <FontAwesomeIcon icon={faEyeSlash} size='1x' />;


export const Login = () => {

    const [visibility,setVisibility] = useState(true);

    const handlePaswordVisibility = () => {
        setVisibility(!visibility);
    }
    
    return(
        <div className={commonClasses.register}>
            <div className={commonClasses.register__card}>
                <div className={classNames(commonClasses['register__card_left'],classes['register__card_left'])}>
                    <form className={classNames(commonClasses['register__form'],classes['register__form'])} action="#">


                        <h1 className={classes.login__heading}> Login to your account</h1>
                        <div className={classNames(classes['email'],commonClasses['div_input_border'],'u-margin_top_bottom_2per')}>
                            <label>
                                Email address:
                                <input
                                    className={commonClasses.width_100}
                                    placeholder='Email address'
                                />
                            </label>
                        </div>
                        <div className={classNames(classes['password'],commonClasses['div_input_border'],'u-margin_top_bottom_2per')}>
                            <label>
                                Password:
                                <div className={commonClasses.register__password_div}>
                                    <input
                                        className={commonClasses.width_100}
                                        type={!visibility ? 'text' : 'password'}
                                        placeholder='Password'
                                    />  
                                    <span onClick={handlePaswordVisibility} className={commonClasses.icon}>
                                        {!visibility? eyeSlashIcon : eyeIcon}
                                    </span>
                                </div>
                            </label>

                        </div>
                        <div className={classNames(commonClasses['submit_btn'],commonClasses['div_input_border'],'u-margin_top_bottom_5per')}>
                            <button type='submit' >Login</button>
                        </div>
                        <div className={classes.forgot_password}>
                        <a href='#'>Forgot password?</a>
                    </div>

                        <div className={commonClasses.form__registered}>
                            <p className={commonClasses.form__registered_link}>Don't have an account? <a className={classes.form__anchor} href='/signup'>Sign Up</a></p>
                        </div>

                    </form>
                </div>
                <div className={classNames(classes['register__card_right'],commonClasses['register__card_right'])}>
                    <div className={classes.login__text}>
                        <div className={commonClasses.registered}>
                            <p className={classes.login__link}>Don't have an account?</p>
                        </div>
                        <div>
                            <a className={classes.anchor} href='./signup'>Sign up</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}