import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import demoVideo from '../../../assets/knowHowVideo.mp4';
import classes from './videoModal.module.scss';



export const VideoModal=()=>{

const[isOpen,setOpen]=useState<boolean>(false);
const modalClass:string=`${classes['modal-video']}`;
  const modalClose: string = `${classes['modal-video-close-btn']}`;

 return (
      <React.Fragment>
           
           <ModalVideo 
          channel="youtube"
          isOpen={isOpen}
            classNames={{
              modalVideo: modalClass,
             modalVideoClose: 'modal-video-close',
         modalVideoBody: 'modal-video-body',
          modalVideoInner: 'modal-video-inner',
        modalVideoIframeWrap: 'modal-video-movie-wrap',
        modalVideoCloseBtn: modalClose,
        modalVideoEffect: 'modal-video-effect'
        }}
          videoId="Dy1A9aWaM_g?si=298nUyEekqSImfNl"
          onClose={() => setOpen(false)}
        />
            {!isOpen && <div>
             <button role="button"  aria-label="Watch Video undefined" className={classes.playButton} onClick={()=>setOpen(true)}>
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="42" cy="42" r="36" fill="white" className="js-circle"></circle>
                    <path d="M35 57.75V26.25L56 42L35 57.75Z" fill="black"></path>
                    </svg>
             </button>
             <video className={classes.video} src={demoVideo}  data-video-preview  playsInline autoPlay muted loop></video>
             </div>
            }
      </React.Fragment>
    );
  }
