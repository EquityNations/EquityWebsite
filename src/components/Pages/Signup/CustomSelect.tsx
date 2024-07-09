import React from 'react';
import classes from './signup.module.css';
import Select from 'react-select';
import { signUpSchema } from './Schemas';
import * as Yup from 'yup';
import { useField } from 'formik';
import { BorderClear, BorderClearRounded } from '@mui/icons-material';
import { hover } from '@testing-library/user-event/dist/hover';


export default({onchange,options,value,className,...props}) => {
    const styles = {
        placeholder:(baseStyles,state)=>({
            ...baseStyles,
            margin:"0",
            fontSize: "1.5rem",
        }),
        
        container:(baseStyles,state)=>({
            ...baseStyles,
            padding:"0",
            paddingBottom:"0",
            margin:"0px",
            minWidth:"max-content",
            width:"100%",
        }),
        dropdownIndicator:(baseStyles,state)=>({
            ...baseStyles,
            padding:"0",
        }),
        valueContainer:(baseStyles,state)=>({
            ...baseStyles,
            padding:"0",
        }),
        control:(baseStyles, state)=> ({
            ...baseStyles,
            "&:hover":{
                boxShadow: state.isFocused ? "inset 0 0 0 2px black" : "none" ,
            },
            boxShadow: state.isFocused ? "inset 0 0 0 2px black" : "none",
            border: state.isFocused ? "1px solid white" : "1px solid gray",
            backgroundColor: "white",

        }),
        option:(baseStyles,state)=>({
            ...baseStyles,
            backgroundColor: state.isSelected ? '#A487BE'    : 'inherit',
            color: state.isSelected ? 'white' : 'black',
            "&:hover":{
                backgroundColor: !state.isSelected ? '#D8CCE4' : '#A487BE',
            },
        }),
    }


    const defaultValue =(options,value)=>{
        return options ? options.find(option=>option.value===value) : ""
    }
    return(
        <div className={classes.className}>
            <Select
                classNamePrefix="react-select"
                className="react-select-container"
                value={defaultValue(options,value)}
                onChange={value=>onchange(value)}
                options={options}
                styles={styles}
            />
            
        </div>
    );
}