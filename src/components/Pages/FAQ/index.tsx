import { useEffect, useState } from "react";
import Accordion from "../../commons/Accordian";
import classes from './faq.module.css';
import { faqDataList } from "../../config";
import classNames from "classnames";


export const FAQ = () => {

  const faqData = faqDataList();
  const [accordianOpen, setAccordianOpen] = useState<any>(null);

  const [maxHeight, setMaxHeight] = useState(false);

  const toggle = (index: any) => {
    if (accordianOpen === index) {
      setAccordianOpen(null);
      setMaxHeight(false);
    } else {
      if (index == 8) {
        setMaxHeight(true);
      }
      setAccordianOpen(index);
    }
  }



  return (
    <div className={classNames(maxHeight ? `${classes.faq} ${classes.faq__Maxheight}` : `${classes.faq}  ${classes.faq__Minheight}`)}>
      <div className={classes.faq__accordian}>
        {faqData.map((faq, index) => (
          <Accordion
            accordionOpen={index === accordianOpen}
            toggle={() => toggle(index)}
            id={faq.id}
            key={faq.id}
            title={faq.title}
            answer={faq.description}
          />
        ))}
      </div>
    </div>
  );
};