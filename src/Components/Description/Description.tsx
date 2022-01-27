import React from 'react';
import classes from './Description.module.css'

const Description = () => {
    return (
        <div className={classes.description_wrapper}>
            <div className="content">
                <div className={classes.description}>
                    <div className={classes.description_header}>
                       Рассматриваю варианты удаленной работы
                    </div>
                    <div className={classes.description_links}>
                        <a href="#">нанять меня</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;