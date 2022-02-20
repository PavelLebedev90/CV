import React from 'react';
import classes from './Scills.module.css';
import Scill from './Scill/Scill';
import redux from '../../Icon/redux.svg';
import react from '../../Icon/react.svg';
import typeScript from '../../Icon/typescript.svg';
import api from '../../Icon/api.svg';
import html5 from '../../Icon/html5.svg';
import scss from '../../Icon/scss.svg';
import storybook from '../../Icon/storybook.svg';
import git from '../../Icon/git.svg';
import javaScript from '../../Icon/javascript.svg';
import axios from '../../Icon/axios.svg';

const Scills = () => {


    const icon = [
        {
            icon: react,
            scill: 'React',
            description: ''
        },
        {
            icon: redux,
            scill: 'Redux',
            description: ''
        },
        {
            icon: typeScript,
            scill: 'TypeScript',
            description: ''
        },
        {
            icon: javaScript,
            scill: 'JavaScript',
            description: ''
        },
        {
            icon: api,
            scill: 'REST API',
            description: ''
        },
        {
            icon: axios,
            scill: 'Axios',
            description: ''
        },
        {
            icon: html5,
            scill: 'HTML/CSS',
            description: ''
        },
        {
            icon: scss,
            scill: 'SCSS',
            description: ''
        },
        {
            icon: storybook,
            scill: 'Unit \nTests\nStoryBook\nSnapshot',
            description: ''
        },
        {
            icon: git,
            scill: 'GIT',
            description: ''
        },
    ]

    return (
        <div className={classes.scills_wrapper} id={'scill'}>
            <div className="content">
                <div className={classes.scills}>
                    <div className={classes.scills_header}>
                        My Scills
                    </div>
                    <div className={classes.scill}>
                        {icon.map((m, i) => {
                            return <Scill key={i} icon={m.icon} scill={m.scill} description={m.description}/>
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scills;
