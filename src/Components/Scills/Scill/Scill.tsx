import React from 'react';
import classes from './Scill.module.css'
const Scill = () => {
    return (
        <div className={classes.myScill}>
            <div>
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

export default Scill;