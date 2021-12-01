import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import { activeClassName } from 'react';

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <NavLink to="/profile" className={style.link}>Profile</NavLink>
            <NavLink to="/dialogs" className={style.link}>Dialogs</NavLink>
            <NavLink to="/messages" className={style.link}>Messages</NavLink>
            <NavLink to="/" className={style.link}>News</NavLink>
            <NavLink to="/" className={style.link}>Music</NavLink>
            <NavLink to="/" className={style.link}>Settings</NavLink>
        </div >
    );
}