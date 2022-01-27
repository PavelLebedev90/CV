import React from 'react';
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <div className={'content'}>
            <div className={classes.nav_content}>
                <div className={classes.nav}>
                    <a href={'#1'}>Главная</a>
                    <a href={'#1'}>Скиллы</a>
                    <a href={'#1'}>Работы</a>
                    <a href={'#1'}>Контакты</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;