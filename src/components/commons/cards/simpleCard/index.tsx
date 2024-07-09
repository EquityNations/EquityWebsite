import classNames from 'classnames';
import classes from './simpleCard.module.css';
import { Button } from '../../buttons';
import { getServiceDataMap } from '../../../config';


export const SimpleCard = (props: any) => {

    const serviceMap = getServiceDataMap();
    const { cardHeading } = props;


    return (
        <div className={classes.card}>
            <div className={classNames(classes.card__side, classes['card__side--front'])}>
                <div className={classNames(classes.card__picture, classes[serviceMap.get(cardHeading).pictureClass])}>
                    &nbsp;
                </div>
                <h4 className={classes.card__heading}>
                    <span className={classNames(classes['card__heading-span'], classes[serviceMap.get(cardHeading).headingSpanClass])}>
                        {cardHeading}
                    </span>
                </h4>
                <div className={classes.card__details}>
                    <h2 className={classNames(classes['heading-tertiary'], classes['u-margin-top-large'])}>{serviceMap.get(cardHeading).cardMainDes}</h2>
                    <p className={classNames(classes.paragraph, classes['u-margin-top-small'])}><ul>{serviceMap.get(cardHeading).cardDetails.map((list)=><li>{list}</li>)}</ul></p>
                </div>
            </div>
            <div className={classNames(classes.card__side, classes['card__side--back'], classes['card__side--back-2'])}>
                <div className={classes.card__cta}>
                    <div className={classes.card__learnMore}>
                        <p className={classes['card__learnMore--content']}>Click below for Further  details and legal disclaimer</p>
                    </div>
                    <Button displayName="Learn More" />
                </div>
            </div>
        </div>)
}