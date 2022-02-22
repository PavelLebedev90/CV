import React from 'react';
import s from './Contacts.module.css';
import {ContactForm} from './ContactForm/ContactForm';
import {LinkButton} from './LinkButton/LinkButton';
import github from './../../Icon/github.svg';
import telegram from './../../Icon/telegram.svg';

export const Contacts = () => {
        return (
            <div id={"contacts"} className={s.generalContainer} >
                    <div className={s.header}>
                        Contacts
                    </div>
                    <div className={s.contentContainer}>

                        <div className={s.linksContainer}>
                            <LinkButton link={'https://t.me/pavelLebedev9'}
                                        title={'Telegram'}
                                        iconClass={telegram}/>
                            <LinkButton link={'https://github.com/PavelLebedev90'}
                                        title={'GitHub'}
                                        iconClass={github}/>
                        </div>
                        <div className={s.separator}></div>
                        <ContactForm/>
                        <div className={s.levelingBlock}></div>
                    </div>
            </div>
        );
    }


