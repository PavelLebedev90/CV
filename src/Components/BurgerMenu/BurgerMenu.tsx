import React, { useState} from 'react';
import classes from './BurgerMenu.module.css'
import {CSSTransition, Transition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-scroll';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    const onClickHandler = () => {
        setOpen(!open)
    }

    const nodeRef = React.useRef(null)
    return (
        <div className={classes.burger}>
                    {open?
                        <div className={classes.btnOpen} onClick={onClickHandler}>
                            <span> </span>
                        </div>
                        :
                        <div className={classes.btn} onClick={onClickHandler}>
                            <span> </span>
                        </div>
                    }
                <CSSTransition
                    in={open}
                    timeout={{
                        appear: 500,
                        enter: 300,
                        exit: 500,
                    }}
                    unmountOnExit
                    onEnter={() => setOpen(true)}
                    onExited={() => setOpen(false)}
                    classNames="item"
                    nodeRef={nodeRef}
                >
                    <div ref={nodeRef} className={classes.dropWrapper}>
                        <DropdownList setOpen={setOpen}/>
                    </div>
                </CSSTransition>
        </div>
    );
};

export default BurgerMenu;
type DropdownListType = {
    setOpen: (open:boolean)=>void

}
const DropdownList = ({ setOpen }:DropdownListType) => {

    return (
            <ul className={classes.list}>
                <li>
                    <Link to={'header'}
                         smooth={'easeInOutQuad'}
                         duration={400}><span onClick={()=>setOpen(false)}>Home</span></Link>
                </li>
                <li>
                    <Link to={'scill'}
                         smooth={'easeInOutQuad'}
                         duration={400}><span onClick={()=>setOpen(false)}>Scills</span></Link>
                </li>
                <li>
                    <Link to={'works'}
                         smooth={'easeInOutQuad'}
                         duration={400}><span onClick={()=>setOpen(false)}>Experience </span></Link>
                </li>
                <li>
                    <Link to={'contacts'}
                         smooth={'easeInOutQuad'}
                         duration={400}><span onClick={()=>setOpen(false)}>Contacts</span></Link>
                </li>
            </ul>
    )
}

