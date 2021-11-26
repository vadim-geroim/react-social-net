import ava from './user-picture.png';
import style from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.ava}>
                <img src={ava} alt="Profile picture" />
            </div>
            <div className={style.info}>
                <h2 className={style.name}>Bob Jackson</h2>
                <h3 className={style.dob}>Date of birth: <span>5 May 2001</span></h3>
                <h3 className={style.city}>City: <span>New York</span></h3>
                <h3 className={style.degree}>Education: <span>Bachelor Degree in Computer Science</span></h3>
                <h3 className={style.site}>https://google.com</h3>
            </div>
        </div>
    );
}