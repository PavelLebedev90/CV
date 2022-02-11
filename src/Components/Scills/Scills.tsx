import React from 'react';
import classes from './Scills.module.css';
import Scill from './Scill/Scill';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faGitAlt} from '@fortawesome/free-brands-svg-icons';

const Scills = () => {

    const icons = [faReact, faJs, faCss3, faHtml5, faGitAlt]
    const i = [
            {
                icon: faReact,
                scill: 'REACT',
                description: ''
            },
           {
                icon: faJs,
                scill: 'JS',
                description: ''
            },
             {
                icon: faCss3,
                scill: 'CSS',
                description: ''
            },
        {
            icon: faHtml5,
            scill: 'HTML',
            description: ''
        },
        {
            icon: faGitAlt,
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
                        {i.map((m, i) => {
                            return <Scill key={i} icon={m.icon} scill={m.scill} description={m.description} />
                        })}
                        {/*<Scill/>*/}
                        {/*<Scill/>*/}
                        {/*<Scill/>*/}
                        {/*<Scill/>*/}
                        {/*<Scill/>*/}
                        {/*<Scill/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scills;
