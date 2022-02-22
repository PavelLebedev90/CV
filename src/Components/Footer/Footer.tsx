import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer_wrapper}>
            <div className="content">
                <div className={classes.footer}>
                    <div className={classes.lineFooter}>

                    </div>
                    <div className={classes.footerText}>
                        © 2022. All rights reserved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
