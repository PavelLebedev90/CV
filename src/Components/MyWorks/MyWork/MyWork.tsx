import React from 'react';
import classes from './MyWork.module.css';

const MyWork = () => {
    return (
        <div className={classes.myWork}>
            <div className={classes.myWork_img}>
                картинка
            </div>
            <div>
                <h5>название скилла</h5>
            </div>
            <div>
                описание навыка
            </div>
        </div>
    );
};

export default MyWork;