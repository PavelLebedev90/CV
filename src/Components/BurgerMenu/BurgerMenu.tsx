import React, {useState} from 'react';
import classes from './BurgerMenu.module.css'

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    const onClickHandler = () => {
        setOpen(!open)
    }
    return (
        <div className={classes.burger}>
            <div className={classes.btn} onClick={onClickHandler}>
                <a href='#'><span> </span></a>
            </div>
            {open
                ? <DropdownList/>
                : ''
            }
        </div>
    );
};

export default BurgerMenu;

const DropdownList = () => {
    return (
        <div className={classes.dropWrapper}>
            <ul className={classes.list}>
                <li><a href="">Главная</a></li>
                <li><a href="">Скиллы</a></li>
                <li><a href="">Работы</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
        </div>
    )
}