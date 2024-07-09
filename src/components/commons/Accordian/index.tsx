import { Collapse } from 'react-collapse';
import classes from './accordian.module.css';

const Accordion = ({accordionOpen, toggle, title, answer,id}) => {

  const accordianStateClass=accordionOpen?`${classes.accordian__action} ${classes['accordian__action--open']}`:`${classes.accordian__action} ${classes['accordian__action--close']}`;

  const accordianIconClass=accordionOpen?`${classes.accordian__icon} ${classes['accordian__icon--rotate']}`:`${classes.accordian__icon}`;
  const accordianIconClass2=accordionOpen?`${classes.accordian__icon} ${classes['accordian__icon--rotate']}`:`${classes.accordian__icon} ${classes['accordian__icon--rotateY']}`;

  return (
      <div className={classes.accordian}>
          <button
              onClick={toggle}
              className={classes.accordian__button}
          >
              <span className={classes.accordian__question}>{title}</span>
              <svg
                  className={classes.accordian_svg}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={accordianIconClass}
                  />
                  <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={accordianIconClass2}
                  />
              </svg>
          </button>
          {/* {accordionOpen &&
          <div className={accordianStateClass}>
              <div className={classes.accordian__answer}>{answer}</div>
          </div>
           } */}
           <Collapse isOpened={accordionOpen}>
              <div className={classes.accordian__answer}>{answer}</div>
           </Collapse>
      </div>
  );
};

export default Accordion;