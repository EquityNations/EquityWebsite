
import classNames from 'classnames';
import classes from './footer.module.css';
import { AppIcon } from '../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';



export const Footer =()=>{

    return <>
     <footer className={classes.footer}>
     <div className="row">
            <div className="col-1-of-4">
                <div className={classes.footer__card}>
                <div className={classNames(classes['u-centre-text'],classes['u-margin-bottom-small'])}>
                <span className={classes.icon}>
                    <AppIcon/>
                 </span>
                   </div> 
                   <p className={classNames(classes.footer__text, classes['u-margin-bottom-small'])}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam</p>
                   <div className={classes['footer__social-area']}>
                    <ul>
                    <li><a href="https://www.facebook.com/" target="_blank"><span><FontAwesomeIcon icon={faFacebook} /></span></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><span><FontAwesomeIcon icon={faXTwitter} /></span></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><span><FontAwesomeIcon icon={faYoutube} /></span></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><span><FontAwesomeIcon icon={faInstagram} /></span></a></li>
                </ul>
            </div>
           </div>
           </div>
            <div className="col-1-of-4">
                <div className={classes['footer-address']}>
             <h3 className={classNames(classes['heading-light'],classes['heading-light--white'] ,classes['u-padding-bottom-small'])}>Contact Us</h3>
             <ul>
                <li>
                    <div className={classes.faicon} >
                    <FontAwesomeIcon icon={faPhone} />
                      </div>
                    <span>Hotline:</span>   
                    <a href="#">Phone: +8224569747</a>
                   </li>
                <li>
                <div className={classes.faicon} >
                <FontAwesomeIcon icon={faEnvelope} />
                </div>
                    <span>Email:</span>   
                    <a href="#">Eqns@gmail.com</a>
                </li>
                <li>
                <div className={classes.faicon} >
                <FontAwesomeIcon icon={faMap} />
                </div>
                    <span>Address:</span>   
                    <a href="#">#32,K R Road,Jayanagar Bengaluru-560066</a>
                </li>
             </ul>
            </div>
             </div>
            <div className="col-1-of-4">
                <div className={classes['footer-services']}>
                <h3 className={classNames(classes['heading-light'],classes['heading-light--white'] ,classes['u-padding-bottom-small'])}>Services</h3>
               <ul>
                <li>Global Investing</li>
                 </ul>
            </div>

            </div>
            <div className="col-1-of-4">
                <h3 className={classNames(classes['heading-light'],classes['heading-light--white'] ,classes['u-padding-bottom-small'])}>Newsletter</h3>
                <div className={classes['footer-newsletter']}>
                <p className={classes['u-padding-top-small']}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div className={classes['footer-newsletter__subscribe']}>
                    <form>
                        <input type="email" className={classes['form-control']} placeholder="Enter Your Email" name="email"></input>
                        <button className={classNames(classes['default-btn'], classes['default-btn-grey'])} type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            </div>
       </div>
   </footer>
<div className={classes['footer-bottom']}>
    <p className={classes['footer-bottom__text']}>Copyright © 2024 EQNS Designed By &nbsp; 
        <a href="#" target="blank">EQNS Dev Team</a>
    </p>
</div>
    </>

}