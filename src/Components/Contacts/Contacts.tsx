import React from 'react';
import classes from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={classes.contacts_wrapper}>
            <div className="content">
                <div className={classes.contacts}>
                    <form className={classes.contacts_form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                    </form>
                    <div>
                        <button className={classes.button}>отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;