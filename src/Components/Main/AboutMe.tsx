import React from 'react';
import classes from './AboutMe.module.css'

type AboutType = {
    closing: () => void
}

const AboutMe = (props: AboutType) => {
    return (
        <div className={classes.about}>
            <div className={classes.closeModal} onClick={props.closing}></div>
            <div className={classes.header}>
                    <h1>LEBEDEV PAVEL</h1>
                    <h3>FRONT - END DEVELOPER</h3>
            </div>
            {/*<div className={classes.icon}>*/}
            {/*    <p><img src="https://img.icons8.com/color/48/000000/telegram-app--v1.png"/></p>*/}
            {/*    <p><img src="https://img.icons8.com/plasticine/100/000000/github.png"/></p>*/}
            {/*</div>*/}
            <div className={classes.content}>
                <div>
                    <div>
                        <h5>ABOUT ME</h5>
                        <hr/>
                        <p>Hello, I am a person who has a
                            strong passion for programming.
                            I have experience in creating SPA
                            with React/Redux/TypeScript.
                            Now I am improving my skills in this
                            direction and expanding them with
                            new technologies.
                            I'm planing to study Node.js,
                            because my next focus is to become
                            a Full-Stack Developer. And also I
                            have interest to design.
                            I spend my leisure time on Codewars
                            or with educational books.
                            Open for your suggestions</p>
                    </div>
                    <div>
                        <h5>CONTACTS</h5>
                        <hr/>
                        <p> Telegram: <a href={'https://t.me/pavelLebedev9'} target={'_blank'}> <button>click</button></a></p>
                        <p> GitHub: <a href ={'https://github.com/PavelLebedev90'} target={'_blank'}> <button>click</button></a></p>
                        <p> Email:  pashoktver90@gmail.com</p>
                        <p> PhoneNumber: +7(910)-831-30-91</p>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;
