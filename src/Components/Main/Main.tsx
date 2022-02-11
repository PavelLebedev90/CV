import React from 'react';
import classes from './Main.module.css'
import photoCV from './../../photoCV.jpg'

type MainType = {
    opening: () => void
}

const Main = (props:MainType) => {
    return (
        <div className={classes.main_wrapper}>

            <div className="content">
                <div className={classes.main}>
                    <div className={classes.description}>
                        <div>
                            <h1>I am <br/>Pavel Lebedev</h1>
                            <p><span>front-end developer</span></p>
                            <p>
                                {/*Я фронтенд-разработчик из Твери,*/}
                                {/*занимаюсь созданием чистого и удобного интерфейса.*/}
                                {/*Я увлечен созданием отличного программного обеспечения,*/}
                                {/*которое улучшает жизнь окружающих меня людей.*/}
                                Front-end developer from Tver, creating a clean and user-friendly interface.
                                I am passionate about making great software,
                                which improves the lives of those around me.
                            </p>
                        </div>

                            <div className={classes.center} onClick={props.opening}>
                                <button className={classes.btn}>
                                    <svg width="180px" height="60px" viewBox="0 0 180 60" className={classes.border}>
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className={classes.bgLine}/>
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className={classes.hlLine}/>
                                    </svg>
                                    <span>About me</span>
                                </button>
                            </div>

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
