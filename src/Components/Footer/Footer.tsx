import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer_wrapper}>
            <div className="content">
                <div className={classes.footer}>

                    <div>
                       все права защищены
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;