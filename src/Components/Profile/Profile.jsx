import ava from './user-picture.png';
import './Profile.css';

export const Profile = () => {
    return (
        <div className="profile">
            <div className="ava-wrapper">
                <img src={ava} alt="Profile picture" />
            </div>
            <div className="profile-info">
                <h2 className="profile-name">Bob Jackson</h2>
                <h3 className="profile-dob">Date of birth: <span>5 May 2001</span></h3>
                <h3 className="profile-city">City: <span>New York</span></h3>
                <h3 className="profile-degree">Education: <span>Bachelor Degree in Computer Science</span></h3>
                <h3 className="profile-site">https://google.com</h3>
            </div>
        </div>
    );
}