import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <Link to="/profile" className={style.link}>Profile</Link>
            <Link to="/dialogs" className={style.link}>Dialogs</Link>
            <Link to="/" className={style.link}>News</Link>
            <Link to="/" className={style.link}>Music</Link>
            <Link to="/" className={style.link}>Settings</Link>
        </div>
    );
}