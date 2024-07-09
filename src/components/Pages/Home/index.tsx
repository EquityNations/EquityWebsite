
import { useInView } from 'react-intersection-observer';
import { Button } from '../../commons/buttons';
import classes from './home.module.css';
import classNames from "classnames";
import BgVideo from '../../commons/bgVideo';
import { VideoModal } from '../../modals/videoModal';
import { SimpleCard } from '../../commons/cards/simpleCard';
import { CardSlider } from '../../commons/cardSlider';




export const Home = () => {
    const { ref: serviceref, inView: inServiceView } = useInView({
        threshold: 0.75,
    });

    const { ref: welcomeRef, inView: inWelocomeView } = useInView({
        threshold: 0.75,
    });

    const { ref: introRef, inView: inIntroView } = useInView({
        threshold: 0.5
    });

    const { ref: checkOutLatestRef, inView: inCheckOutLatestView } = useInView({
        threshold: 0.75,
    });


    return (
        <div  >
            <section id="eqns" ref={welcomeRef}>
                <div className={classes.home}>

                    <div className={classes.home__overflow}>
                        <div className={classes.home__main}>
                            <h1 className={classes.home__main__title}>
                                <span className={classes.word}>Welcome to the</span>
                                {/* &nbsp; */}
                                {/* <span className={classes.word}>to the</span>
                                &nbsp; */}
                                {/* <span className={classes.word}>the</span>
                                &nbsp; */}
                                <span className={classes.appWord}>Equity Nations</span>
                                &nbsp;
                                <span className={classes.word}>Era</span>
                                {/* &nbsp; */}
                            </h1>

                        </div>
                    </div>
                    <BgVideo sectionName='home' />
                </div>
            </section>
            <div>
                <div id='navigation' data-stop-section-id="#navigation-stop_1" data-navigation="#navigation" className={classes.inlineNavigation} >
                    <nav className={classes.inlineNav}>
                        <a className={`${inWelocomeView ? classes.inlineNavActive : ''}`} href="#eqns">EQNS Era</a>
                        <a className={`${inIntroView ? classes.inlineNavActive : ''}`} href="#introduction">Introduction</a>
                        <a className={`${inServiceView ? classes.inlineNavActive : ''}`} href="#services">Services</a>
                        <a className={`${inCheckOutLatestView ? classes.inlineNavActive : ''}`} href="#newItems">Check-Out Latest</a>
                    </nav>
                </div>
                <div ref={introRef}>
                    <section data-section="introduction"
                        id="introduction" className={classes.introduction}>
                        <div className={classes.introduction__content}>
                            <h2 className={classNames(classes.introduction__content__word, classes.title__h2__alt, classes.glueHeadline)}>
                                <span className={classes.introduction__content__word__alt}>EquityNations (EQNS) </span>
                                helps Residents of India (ROI) and NRIs in diversifying their portfolio into
                                <span className={classes.introduction__content__word__alt}> international markets</span>.
                            </h2>
                        </div>
                    </section>
                    <div data-section="description" id="description" className={classes.description}>
                        <h2 className={classNames(classes.glueHeadline, classes.title__description__h2)}>The EQNS Era</h2>
                        {/* <p className={classes.description__p}> 
                            We offer trading services into International Stocks and mutual funds with the benefits of low cost discount broking and user friendly platform.
                            On EQNS we have 30000+ stocks, ETFs and mutual funds from all over the World. You can start investing in your dream companies like Google, Apple, Facebook or Saudi Aramco, Emaar Properties, LVMH, etc.
                        </p> */}
                        <Button displayName="Read the blog post &rarr;" />

                    </div>
                    <section id="introVideo" className={classes.introVideo}>
                        <VideoModal />
                    </section>
                </div>
                <section ref={serviceref} id="services" className={classes.services}>
                    <div className={classNames(classes['u-centre-text'], classes['u-margin-bottom-large'])}>
                        <h2 className={classes['heading-secondary']}>
                            Our Services
                        </h2>
                    </div>
                    <div className='row'>
                        <div className='col-1-of-2'>
                            <SimpleCard cardHeading='Global Investing' />
                        </div>
                        <div className='col-1-of-2'>
                            <SimpleCard cardHeading='Insurances' />
                        </div>
                    </div>
                </section>
                <section id='newItems' ref={checkOutLatestRef}>
                    <CardSlider />
                </section>
            </div>
        </div>

    );

}