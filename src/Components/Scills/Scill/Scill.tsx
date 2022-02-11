import React from 'react';
import classes from './Scill.module.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type ScillType = {
    icon: IconDefinition
    scill: string
    description:string
}

const Scill = (props:ScillType) => {

    return (
        <div className={classes.myScill}>
            <div className={classes.myScillIcon}>
                    <FontAwesomeIcon icon={props.icon}
                                     color={'rgba(255, 181, 16, 0.86)'}
                                     size={'3x'}
                                     style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                    />

            </div>
            <div className={classes.myScillHeader}>
                <h5>{props.scill}</h5>
            </div>
            <div>
                {props.description}
            </div>
        </div>
    );
};

export default Scill;
