import React from 'react';
import classes from './Scill.module.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import redux from './../../../Icon/redux.svg'
type ScillType = {
    icon: string
    scill: string
    description:string
}

const Scill = (props:ScillType) => {

    return (
        <div className={classes.myScill}>
            <div className={classes.myScillIcon}>
                    <img className={classes.icon} src={props.icon} alt={props.scill}/>
            </div>
            <div className={classes.myScillHeader}>
                {props.scill}
            </div>
            <div>
                {props.description}
            </div>
        </div>
    );
};

export default Scill;
