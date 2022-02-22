import React from 'react';
import classes from './Scill.module.css'
type ScillType = {
    icon: string
    scill: string
    description:string
}

const Scill = (props:ScillType) => {

    return (
        <div className={classes.myScill}>
            <div className={classes.myScillIcon}>
                    <img className={classes.icon} src={props.icon} alt={props.scill}/>
            </div>
            <div className={classes.myScillHeader}>
                {props.scill}
            </div>
        </div>
    );
};

export default Scill;
