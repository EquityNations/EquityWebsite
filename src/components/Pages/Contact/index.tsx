import React, { Component, useState } from 'react';
import classes from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { faPhone, faPhoneVolume, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faFacebook, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import formik, { useFormik } from 'formik';

import PhoneInput , { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// import { signUpSchema } from './SchemaContact';
import axios from 'axios';

const phoneIcon = <FontAwesomeIcon icon={faPhone} size='2x' />;
const emailIcon = <FontAwesomeIcon icon={faTelegram} size='2x' />;
const webIcon = <FontAwesomeIcon icon={faGlobe} size='2x' />;
const facebook = <FontAwesomeIcon icon={faFacebook} size='2x' />;
const twitter = <FontAwesomeIcon icon={faSquareTwitter} size='2x' />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} size='2x' />;

export const Contact = () => {

    const[phone,setPhone] = useState("");

    const formik = useFormik({
        initialValues:{
            firstName: "",
            lastName:"",
            phoneNumber:"",
            email:"",
            message:""
        },
        onSubmit:values => {
            values.phoneNumber = phone;
            axios.post("https://jsonplaceholder.typicode.com/users",formik.values)
            .then(response => {
                
            })
        }
    });

    const changePhoneNumber = (value) => {
        setPhone(value);
    }

    return (
        <div className={classes.contact}>
            <div className={classes.contact_card}>
                <div className={classes.card_left}>

                    <div className={classes.card_left_inner}>
                        <h1 className={classes.card_left_heading}>Contact Information</h1>
                        <h3 id='text' className={classes.card_left_para}>Fill up the form, our team will get back to you within 24 hours</h3>
                        <div className={classes.contact_info}>
                            <div className={classes.det}>
                                <p className={classes.symbol}> {phoneIcon} </p>
                                <p className={classes.text}>Phone: +12345 67890</p>
                            </div>
                            <div className={classes.det}>
                                <p className={classes.symbol}> {emailIcon} </p>
                                <p className={classes.text}>Email: someone@gmail.com</p>
                            </div>
                            <div className={classes.det}>
                                <p className={classes.symbol}> {webIcon} </p>
                                <p className={classes.text}>Website: mywebsite.com</p>
                            </div>
                        </div>
                        <div className={classes.contact_info_links}>
                            <a className={classes.bottomIcons} href='Facebook.com'>{facebook}</a>
                            <a className={classes.bottomIcons} href='twitter.com'>{twitter}</a>
                            <a className={classes.bottomIcons} href='linkedin.com'>{linkedin}</a>
                        </div>
                    </div>
                </div>
                <div className={classes.card_right}>

                    <form onSubmit={formik.handleSubmit} className={classes.form}>

                        <h1 className={classes.msg}>Send us a message</h1>
                        <div className={classNames(classes['form__name'], classes['margin_bottom5per'])}>
                            <input 
                                id='firstName'
                                name='firstName'
                                className={classNames(classes['firstName'], classes['width_100per'], classes['input_border_1px'], classes['height_5rem'])} 
                                type='text' 
                                placeholder='First Name'
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                required
                            />
                            <input 
                                id='lastName'
                                name='lastName'
                                className={classNames(classes['lastName'], classes['width_100per'], classes['input_border_1px'], classes['height_5rem'])} 
                                type='text' 
                                placeholder='Last Name' 
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                required
                            />
                        </div>
                        <div className={classNames(classes['form__contact'], classes['margin_bottom5per'])}>
                            <input 
                                id='email'  
                                name='email'
                                className={classNames(classes['mail'], classes['width_100per'], classes['input_border_1px'], classes['height_5rem'])} 
                                type='email' 
                                placeholder='Mail' 
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                required
                            />
                            <div className={classes.phone_div}>
                                <PhoneInput
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    placeholder="Phone number"
                                    value={phone}
                                    className={classNames(classes['phone'], classes['height_5rem'])}
                                    onChange={value=>changePhoneNumber(value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className={classNames(classes['form__messagebox'], classes['margin_bottom5per'])}>
                            <textarea 
                                className={classNames(classes['form__message'], classes['width_100per'], classes['input_border_1px'], classes['height_12rem'])} 
                                placeholder='Write your message' 
                                id='message'
                                name='message'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                required
                            />
                        </div>
                        <div className={classNames(classes['form__button_div'], classes['margin_topbottom'])}>

                            <button  type='submit' className={classNames(classes['form__button'], classes['width_100per'], classes['input_border_1px'], classes['height_5rem'])} >Send message</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
