import classNames from "classnames"
import classes from './button.module.css';

export const Button=(props:any)=>{
  return  <a href="#" className={classNames(classes.btn ,classes['btn-black'],classes['btn-animated'])}>{props.displayName}</a>
}