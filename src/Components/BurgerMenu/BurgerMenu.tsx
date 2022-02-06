import React, {useState} from 'react';
import classes from './BurgerMenu.module.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-scroll';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    const onClickHandler = () => {
        setOpen(!open)
    }
    return (
        <div className={classes.burger}>
            <TransitionGroup>
                <CSSTransition
                    timeout={500}
                    classNames="btn"
                >
                    {open?
                        <div className={classes.btnOpen} onClick={onClickHandler}>
                            <span> </span>
                        </div>
                        :
                        <div className={classes.btn} onClick={onClickHandler}>
                            <span> </span>
                        </div>
                    }

                </CSSTransition>
            </TransitionGroup>
            <TransitionGroup>
                {open
                    ?
                    <CSSTransition
                        timeout={500}
                        classNames="item"
                    >
                        <DropdownList setOpen={setOpen}/>
                    </CSSTransition>
                    : ''
                }

            </TransitionGroup>
        </div>
    );
};

export default BurgerMenu;
type DropdownListType = {
    setOpen: (open:boolean)=>void
}
const DropdownList = ({ setOpen }:DropdownListType) => {

    return (

        <div
            className={classes.dropWrapper}
        >
            <ul className={classes.list}>
                <li>
                    <Link to={'header'}
                         smooth={'easeInOutQuad'}
                         duration={400}><span onClick={()=>setOpen(false)}>Главная</span></Link>
                </li>
                <li>
                    <Link to={'scill'}
                         smooth={'easeInOutQuad'}
                         duration={400}><span onClick={()=>setOpen(false)}>Скиллы</span></Link>
                </li>
                <li>
                    <Link to={'works'}
                         smooth={'easeInOutQuad'}
                         duration={400}><span onClick={()=>setOpen(false)}>Работы</span></Link>
                </li>
                <li>
                    <Link to={'contacts'}
                         smooth={'easeInOutQuad'}
                         duration={400}><span onClick={()=>setOpen(false)}>Контакты</span></Link>
                </li>
            </ul>
         </div>
    )
}

