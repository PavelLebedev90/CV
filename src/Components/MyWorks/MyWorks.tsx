import React from 'react';
import classes from './MyWorks.module.css';
import MyWork from './MyWork/MyWork';


const MyWorks = () => {
    return (
        <div className={classes.myWorks_wrapper}>
            <div className="content">
                <div className={classes.myWorks}>
                    <div className={classes.myWorks_header}>
                        Мои работы
                    </div>
                    <div className={classes.myWork}>
                        <MyWork/>
                        <MyWork/>
                        <MyWork/>
                        <MyWork/>
                        <MyWork/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;