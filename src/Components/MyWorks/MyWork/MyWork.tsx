import React from 'react';
import classes from './MyWork.module.css';

type MyWorkType = {
    photo: string
    header:string
    description:string
    link:string
}

const MyWork = ({photo, header, description,link}:MyWorkType) => {
    return (
        <div className={classes.myWork}>
            <div className={classes.myWork_img}>
                <img src={photo} alt=""/>
            </div>
            <div className={classes.myWorkHeader}>
                <h5>{header}</h5>
            </div>
            <div className={classes.description}>
                {description}
            </div>
            <div>
               <button className={classes.button}><a href={link} target={'_blank'}>View project</a></button>
            </div>
        </div>
    );
};

export default MyWork;
