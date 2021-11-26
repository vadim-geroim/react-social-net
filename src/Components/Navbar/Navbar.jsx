import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="nav">
            <a className="nav-link" href="#">Profile</a>
            <a className="nav-link" href="#">Messages</a>
            <a className="nav-link" href="#">News</a>
            <a className="nav-link" href="#">Music</a>
            <a className="nav-link" href="#">Settings</a>
        </div>
    );
}