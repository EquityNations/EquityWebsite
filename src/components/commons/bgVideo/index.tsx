import React, { Fragment } from "react";
import classes from './bgvideo.module.css';
import { getBgVideoConfig } from "../../config";

 const BgVideo=(props:any)=>{


    return (
        <Fragment>
        <div className={classes.bgVideo}>
            <div className={classes.bgVideo__content }>
            <video autoPlay muted loop >
                <source src={getBgVideoConfig(props.sectionName).bgVideo} typeof="video/mp4" />
            Video Not supported By browser
            </video>
            </div>
    </div>
    </Fragment>
    )
 };

 export default BgVideo;