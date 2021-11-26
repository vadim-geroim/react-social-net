import style from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href="#">Profile</a>
            <a className={style.link} href="#">Messages</a>
            <a className={style.link} href="#">News</a>
            <a className={style.link} href="#">Music</a>
            <a className={style.link} href="#">Settings</a>
        </div>
    );
}