import React from 'react';
import classes from './Nav.module.css'
import {Link} from 'react-scroll';

const Nav = () => {
    return (
        <div className={'content'}>
            <div className={classes.nav_content}>
                <div className={classes.nav}>
                    <Link to={'header'}
                          smooth={'easeInOutQuad'}
                          duration={400}>Home</Link>
                    <Link to={'scill'}
                          smooth={'easeInOutQuad'}
                          duration={400}>Scills</Link>
                    <Link to={'works'}
                          smooth={'easeInOutQuad'}
                          duration={400}>Experience</Link>
                    <Link to={'contacts'}
                          smooth={'easeInOutQuad'}
                          duration={400}>Contacts</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
