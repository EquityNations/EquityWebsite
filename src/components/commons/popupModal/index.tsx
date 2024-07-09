import classes from './popupModal.module.css';

const Modal = (props:any) => {
    if (!props.open) return null;
    return (
        <div onClick={props.onClose} className={classes.overlay}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={classes.modalContainer}
            >
                <img className={classes.img} src={props.cardContent.imagePath} alt='/' />
                <div className={classes.modalRight}>
                    <a className={classes.popup__close} onClick={props.onClose}>&times;</a>
                    <div className={classes.content}>
                    <h2 className='heading-secondary u-margin-bottom-small'>{props.cardContent.headerName}</h2>
                        <p className={classes.popup__text}>
                            {props.cardContent.containerContent}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;