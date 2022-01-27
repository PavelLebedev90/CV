import React from 'react';
import classes from './Main.module.css'
import photoCV from './../../photoCV.jpg'

const Main = () => {
    return (
        <div className={classes.main_wrapper}>

            <div className="content">
                <div className={classes.main}>
                    <div className={classes.description}>
                        <p>Привет</p>
                        <p>Меня зовут Павел Лебедев.</p>
                        <p>Я front-end разработчик</p>
                    </div>
                    <div className={classes.ava}>
                        <img src={photoCV} alt="photo"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;