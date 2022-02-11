import React from 'react';
import classes from './Header.module.css'
import Nav from '../Navigation/Nav';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
    return (
            <div className={classes.header} id={'header'}>
                <BurgerMenu/>
                <Nav/>
            </div>
    );
};

export default Header;
