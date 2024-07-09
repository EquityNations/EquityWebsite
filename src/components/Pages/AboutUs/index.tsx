import React, { useState } from "react";
import classes from './aboutUs.module.css';
import BgVideo from "../../commons/bgVideo";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { AboutUsAddOnList, AboutUsCardContentList } from "../../config";
import Modal from "../../commons/popupModal";
import img from '../../../assets/learnMore.jpg';



export const AboutUs = (props: any) => {
   const [openModal, setOpenModal] = useState(false);
   const [cardContent, setCardContent] = useState(null);

   const viewModal = (card: any) => {
      setOpenModal(true);
      setCardContent(card);
   }

   const cardData = AboutUsCardContentList();
   const cardAddonData = AboutUsAddOnList();

   return (
      <>
         <div className={classes.about}>
            <div className={classNames(classes.about__header)}>
               <BgVideo sectionName='about' />
               <h2 className={classes['about__header--text']}>About us</h2>
               <h2 className={classes['about__header--content']}>
                  <span className={classes.word}>No</span>
                  &nbsp;
                  <span className='heading-secondary--lower'>borders</span>

                  <span className={classes.word}>,no</span>
                  &nbsp;
                  <span className='heading-secondary--lower'>boundaries</span>
                  <span className={classes.word}>,</span>
                  &nbsp;
                  <span className={classes.word}>Just endless</span>
                  &nbsp;
                  <span className='heading-secondary--lower'>Investment</span>
                  &nbsp;
                  <span className={classes.word}>Opportunities.</span>
                  &nbsp;
               </h2>
            </div>
            <div className={classNames(classes.about__description)}>

               <div className={classNames(classes.about__description__area)}>
                  <h3>
                     EquityNations (EQNS) is a user friendly platform which helps Residents of India (ROI) and NRIs in diversifying their      portfolio into international markets with the help of a technology provider (INX – India International Exchange powered by BSE – Bombay Stock Exchange). We offer trading services into International Stocks, Mutual Funds, PMS and hedge funds with the benefits of low cost discount broking.
                  </h3>
                  <div className={classes.about__description__card}>
                     {(cardData.map((card) => (
                        <div className={classNames(classes['about__description__card--content'])}
                           style={{ backgroundColor: card.bgColor }}
                           key={card.id} onClick={viewModal.bind(null, card)}>

                           <h2 className={classes.cardText}>{card.headerName}</h2>
                           <p>{card.description}</p>
                           <img className={classes.picture} src={card.imagePath} title={card.headerName} alt={card.headerName}></img>
                           <div className={classes.icon}>
                              <FontAwesomeIcon icon={faCirclePlus} />

                           </div>
                        </div>
                     ))
                     )}
                  </div>
               </div>
               <div className={classes.box}>
                  <span className={classNames('heading-secondary--lower', classes['heading-secondary_about'])}>
                     Opening doors to financial freedom and Democratizing finance for a more inclusive future.
                  </span>
               </div>

               <div className={classes.about__add__description}>

                  {(cardAddonData.map((cardAddon) => (
                     <div className={classes.about__add__description__content}>
                        <div className={classes.about__add__description__content__left}>
                           <img src={cardAddon.imagePath}></img>
                        </div>
                        <div className={classes.about__add__description__content__right} style={{ order: cardAddon.order }}>
                           <h2 className='heading-secondary--lower u-margin-bottom-small'>{cardAddon.headerName}</h2>
                           <p className='paragraph'>{cardAddon.description}</p>
                           <a href="#" className="btn-text">Learn more &rarr;</a>
                        </div>
                     </div>
                  ))
                  )}

               </div>


            </div>
            <div className={classes.about__founders}>
               <div className={classes.about__founders__story}>
                  <div className={classes.about__founders__story__content}>
                     <figure className={classes.about__founders__story__shape}>
                        <img src={img} alt="Person on a tour" className={classes.story__img}></img>
                     </figure>
                  </div>
                  <div className={classes.story__text}>
                     <h2 className='u-margin-bottom-small'>Meet Our Founders</h2>
                     <p>Our story began at Stanford, where co-founders Baiju and Vlad were roommates and classmates. After graduating, they packed their bags for New York City and built two finance companies, selling their own trading software to hedge funds. There, they discovered that big Wall Street firms were paying next-to-nothing to trade stocks, while most Americans were charged commission for every single trade. They wanted to change that, so they headed back to California to build a financial product that would give everyone—not just the wealthy—access to financial markets.</p>
                  </div>
               </div>
            </div>

         </div>
         <Modal
            open={openModal}
            onClose={() => setOpenModal(false)} cardContent={cardContent} />
      </>
   );
};