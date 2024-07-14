import classNames from 'classnames';
import classes from './signup.module.css';
import commonClasses from '../../commons/loginSignupCss/common.module.css';
import { useFormik } from 'formik';
import CustomSelect from './CustomSelect';
import PhoneInput , { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import { signUpSchema } from '../../util/yupValidationSchema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const eyeIcon = <FontAwesomeIcon icon={faEye} size='1x' />;
const eyeSlashIcon = <FontAwesomeIcon icon={faEyeSlash} size='1x' />;

export const Signup = () => {

    const[phone,setPhone] = useState("");

    const formik = useFormik({
        initialValues:{
            title: "",
            firstName: "",
            lastName: "",
            email:"",
            phoneNumber: "",
            residentType: "",
            password: "",
            terms: ""
        },
        validationSchema:  signUpSchema,
        onSubmit: values => {
            values.phoneNumber = phone;
            alert(formik.values.firstName);
        },
        
    });
    const changePhoneNumber = (value) => {
        setPhone(value);
    }
    const [visibility,setVisibility] = useState(true);

    const handlePaswordVisibility = () => {
        setVisibility(!visibility);
    }

    const titleOptions = [
        {value:'N/A',label:'Select'},
        {value:'mr.',label:'Mr.'},
        {value:'ms.',label:'Ms.'}
    ]
    const residentOptions = [
        { value: 'ri', label: 'Resident Indian' },
        { value: 'nri', label: 'Non Resident Indian' }
    ]

    return (
        <div className={commonClasses.register}>
            <div className={commonClasses.register__card}>
                <div className={classNames(commonClasses['register__card_left'],classes['register__card_left'])}>
                    <form className={classNames(commonClasses['register__form'],classes['register__form'])} onSubmit={formik.handleSubmit}>

                        <h1 className={classes.signup__heading}>Sign Up</h1>
                        <div className={classNames(classes['name'],commonClasses['name'])}>
                            <div className={classNames(classes['title'],commonClasses['div_input_border'])}>
                                <label >
                                    Title:
                                    <CustomSelect 
                                        id="title"
                                        name="title" 
                                        onBlur={formik.handleBlur}
                                        onchange={value=>formik.setFieldValue('title',value)}
                                        options={titleOptions}
                                        value={formik.values.residentType}
                                        className={classes.width_100}
                                        
                                    />
                                </label>
                            </div>
                            <div className={classNames(classes['firstName'],commonClasses['div_input_border'])}>
                                <label >
                                    First Name:
                                    <input
                                        id='firstName'
                                        type="text"
                                        name='firstName'
                                        autoComplete='off'
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='First Name'
                                        className={commonClasses.width_100}
                                    />
                                    {formik.errors.firstName && formik.touched.firstName && <p className={classes.error_msg}>{formik.errors.firstName}</p>}
                                </label>
                            </div>
                            
                            <div className={classNames(classes['lastName'],commonClasses['div_input_border'])}>
                                    <label >
                                        Last Name:
                                        <input
                                            id='lastName'
                                            type="text"
                                            name='lastName'
                                            className={commonClasses.width_100}
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder='Last Name'
                                        />
                                        
                                    </label>
                                {formik.errors.lastName && formik.touched.lastName && <p className={classes.error_msg}>{formik.errors.lastName}</p>}
                            </div>
                        </div>

                        <div className={classNames(classes['email'],commonClasses['div_input_border'])}>
                            <label>
                                Email address:
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    className={commonClasses.width_100}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Email Address' 
                                />
                            </label>
                            {formik.errors.email && formik.touched.email && <p className={classes.error_msg}>{formik.errors.email}</p>}
                        </div>  
                        <div className={classNames(classes['phone'],commonClasses['div_input_border'])}>
                            <label>
                                Mobile Number:
                                <PhoneInput
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter phone number"
                                    className={classes.phone}
                                    value={phone}
                                    onChange={value=>changePhoneNumber(value)}
                                    
                                />
                            </label>
                            {!phone && formik.touched.phoneNumber && <p className={classes.error_msg}>Enter your valid phone number</p>}
                            {phone && !isValidPhoneNumber(phone) && <p className={classes.error_msg}>Enter your valid phone number</p>}
                        </div>
                        <div className={classes.residentType}>
                            <label>
                                Resident type:
                                <CustomSelect
                                    id="residentType"
                                    name="residentType"
                                    onBlur={formik.handleBlur}
                                    onchange={value=>formik.setFieldValue('residentType',value)}
                                    options={residentOptions}
                                    value={formik.values.residentType}
                                    className={classes.selectinput}
                                />
                            </label>
                            {formik.errors.residentType && formik.touched.residentType && <p className={classes.error_msg}>{formik.errors.residentType}</p>}
                        </div>
                        <div className={classNames(commonClasses['div_input_border'])}>
                            <label>
                                Password:
                                <div className={commonClasses.register__password_div}>
                                    <input
                                        name='password'
                                        type={!visibility ? 'text' : 'password'}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        placeholder='Password'
                                        onBlur={formik.handleBlur}
                                        className={commonClasses.width_100}
                                        
                                    />
                                    <span onClick={handlePaswordVisibility} className={commonClasses.icon}>
                                    {!visibility? eyeSlashIcon : eyeIcon}
                                    </span>
                                </div>
                                
                            </label>
                            {formik.errors.password && formik.touched.password && <p className={classes.error_msg}>{formik.errors.password}</p>}
                        </div>
                        <div className={classes.terms}>
                            <label>
                            
                                <input
                                    type='checkbox'
                                    id='terms'
                                    value={formik.values.terms}
                                    onChange={formik.handleChange}
                                    name='terms'
                                    onBlur={formik.handleBlur}
                                />
                                I have read and agree with the <a href=''>Terms of Use,Client Agreement and policy</a>
                                {formik.errors.terms && formik.touched.terms && <p className={classes.error_msg}>{formik.errors.terms}</p>}
                            </label>
                        </div>
                        <div className={classNames(commonClasses['submit_btn'])}>
                            <button type='submit'>Create account</button>
                        </div>

                        <div className={commonClasses.form__registered}>
                            <p className={classes.form__registered_link}>Already have an account? <a className={classes.form__anchor} href='./login'>Login</a></p>
                        </div>
                    </form>
                </div>
                <div className={classNames(classes['register__card_right'],commonClasses['register__card_right'])}>
                    <div className={classes.login__text}>
                        <div className={classes.registered}>
                            <p className={classes.login__link}>Already have an account?</p>
                        </div>
                        <div>
                            <a className={classes.anchor} href='./login'>Login</a>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
    );
};