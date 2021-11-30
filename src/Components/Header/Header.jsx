import logo from './logo.png';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </header>
        </>
    );
}