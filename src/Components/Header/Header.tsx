import React from 'react';
import classes from './Header.module.css'
import Nav from '../Navigation/Nav';

const Header = () => {
    return (
        <div className={classes.header}>
                <Nav/>
        </div>
    );
};

export default Header;