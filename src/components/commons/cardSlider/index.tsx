
import Slider from 'react-slick';
import classes from './cardSlider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import img from '../../../assets/meetFoundersBg.jpg';
import { lightGreen } from '@mui/material/colors';
import { Button } from '../buttons';
import classNames from 'classnames';
import { checkOutLatestList } from '../../config';



const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    Previous
  </button>
);

 const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    Next
  </button>
);

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  nextArrow: (
    <div>
      <div className="next-slick-arrow">
      <FontAwesomeIcon icon={faCircleArrowRight} />
       </div>
    </div>
  ),
  prevArrow: (
    <div>
      <div className="prev-slick-arrow"> 
      <FontAwesomeIcon icon={faCircleArrowLeft} />
       </div>
    </div>
  ),
  // prevArrow: <SlickArrowLeft />,
  // nextArrow: <SlickArrowRight  />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const CardSlider=(props:any)=>{

  const latestServiceData=checkOutLatestList();

    return (
        <div className={classes.cardCarousel}>
        <h2 className='heading-secondary--large u-margin-bottom-small'>Check out our latest</h2>
          <div className={classes.cardCarousel__content}>
           <Slider {...settings}>
            { latestServiceData.map((data)=>(
            <div className={classNames(classes.box,'bgcolor--'+data.bgColor)}>
             <div className={classes.box__content}>
              <img src={data.imagePath}></img>
              <div className={classes.box__content__text}>
                <h2>{data.headerName}</h2>
                <p>{data.description}</p>
              </div>
              <div className={classes.box__button} >
              <Button displayName={data.buttonText}/>
              </div>
             </div>
            </div>
            ))
          }
          </Slider>
           </div>
        </div>
      );
    }