import * as Yup from 'yup';

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passwordRule = /^(?!.* )(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ ;
const emailRule = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const space = /^(?!.* )/;


export const signUpSchema = Yup.object({
    firstName:Yup.string().min(2,'First name must be at least 2 characters long').max(20,'First name must be at most 20 characters').required("Please enter First name"),

    lastName:Yup.string().min(1).max(20,'Last name must be at most 20 characters').required("Please enter last name"),

    email:Yup.string().email('Invalid email address').matches(emailRule,'Invalid email address').required("A valid email is required"),

    password:Yup.string().matches(space,"Password must not contain empty space").min(8,'Password must have minimum 8 characters').matches(passwordRule,'Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character').required("Please enter a valid password"),

    residentType:Yup.object().required("Please select an option"),

    terms:Yup.bool().oneOf([true],"Please accept the terms and conditions to continue").required("Please accept the terms and conditions to continue"),
})