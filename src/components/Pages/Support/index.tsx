import { FAQ } from '../FAQ';
import classes from './support.module.css';
import img from '../../,,/../../assets/faq.jpg'

export const Support = () => {
    return (
      <div className={classes.support}>
        <div className={classes.support__header}>
          <img src={img}></img>
          
         </div>
      <FAQ />
    
    </div>
    );  
  };