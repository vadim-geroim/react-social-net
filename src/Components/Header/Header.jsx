import logo from './Samurai-Logo.png';
import './Header.css';

export const Header = () => {
    return (
        <>
            <header className="header">
                <a href="#">
                    <img src={logo} alt="Logo" />
                </a>
            </header>
        </>
    );
}