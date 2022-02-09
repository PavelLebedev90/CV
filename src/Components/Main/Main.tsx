import React from 'react';
import classes from './Main.module.css'
import photoCV from './../../photoCV.jpg'

const Main = () => {
    return (
        <div className={classes.main_wrapper}>

            <div className="content">
                <div className={classes.main}>
                    <div className={classes.description}>
                        <h1>Я <br/>Павел Лебедев.</h1>
                        <p><span>frontend developer</span></p>
                        <p>
                            Я  фронтенд-разработчик из Твери,
                            занимаюсь созданием чистого и удобного интерфейса.
                            Я увлечен созданием отличного программного обеспечения,
                            которое улучшает жизнь окружающих меня людей.
                        </p>
                    </div>
                    <div className={classes.ava}>
                        <img src={photoCV} alt="photo"/>
                    </div>
                    <div className={classes.avaBG}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;