import logo from './logo.png';
import style from './Header.module.css';

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <a href="#">
                    <img src={logo} alt="Logo" />
                </a>
            </header>
        </>
    );
}