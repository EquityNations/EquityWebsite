import classNames from 'classnames';
import classes from './pricing.module.css';
import BgVideo from '../../commons/bgVideo';
import img1 from '../../../assets/ResidentOfIndia.jpg';
import img2 from '../../../assets/NRI.jpg';
import { Button } from '../../commons/buttons';


export const Pricing = () => {
    return (
      <>
      <div className={classes.pricing}>
      <div className={classNames(classes.pricing__header)}>
               <BgVideo sectionName='pricing' />
               <h2 className={classes['pricing__header--text']}>Pricing</h2>
               <h2 className={classes['pricing__header--content']}>
                  <span className={classes.word}>We provide a channnel to make</span>
                  &nbsp;
                  <span className='heading-secondary--lower'>Investments</span>
                  &nbsp;
                  <span className={classes.word}>with nominal</span>
                  &nbsp;
                  <span className='heading-secondary--lower'>Pricing.</span>
                  &nbsp;
               </h2>
            </div>
            <div className={classes.pricing__quotes}>
              <div className={classNames(classes.pricing__quotes__text,'u-margin-bottom-medium')}>
               <h3>Pricing is actually a pretty simple and straight forward thing. Customers will not pay literally a penny more than the true value of the service.
                Please find our pricing below.</h3>
               </div>
               <div className={classes.pricing__quotes__card}>
                <div className={classes['pricing__quotes__card--content']}>
                <img src={img1}></img>
                <h3>Residents of India</h3>
                <div className={classes.card__details}>
                <ul>
                  <li>*No Account Opening Fees</li>
                  <li>*No Hidden Charges</li>
                  <li>Deposit - $1 per trade</li>
                  <li>Withdrawal -  $1 per trade</li>
                </ul>
                </div>
                </div>
                <div className={classes['pricing__quotes__card--content']}>
                <img src={img2}></img>
                <h3>Non-Resident Indian</h3>
                <div className={classes.card__details}>
                <ul>
                 <li>Account Opening Fees- Rs 500</li>
                  <li>Deposit - $1 per trade</li>
                  <li>Withdrawal -  $1 per trade</li>
                </ul>
                </div>
                  </div>
               </div>
               <div className={classes.pricing__quotes__button}>
               <Button displayName='Sign Up'/>
               </div>
           </div>
      </div>
      </>
    );
  };