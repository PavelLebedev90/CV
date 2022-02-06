import React from 'react';
import classes from './Scills.module.css';
import Scill from './Scill/Scill';

const Scills = () => {
    return (
        <div className={classes.scills_wrapper}  id={'scill'}>
            <div className="content">
                <div className={classes.scills}>
                    <div className={classes.scills_header}>
                        Мои скиллы
                    </div>
                    <div className={classes.scill}>
                        <Scill/>
                        <Scill/>
                        <Scill/>
                        <Scill/>
                        <Scill/>
                        <Scill/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scills;