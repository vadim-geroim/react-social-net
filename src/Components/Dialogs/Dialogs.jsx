import style from './Dialogs.module.css';
import { Messages } from '../Messages/Messages';
import { NavLink } from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                <div className={`${style.dialog} ${style.active}`}>
                    <NavLink to="/dialogs/1">User 1</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">User 2</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">User 3</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">User 4</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello User!</div>
                <div className={style.message}>What's up</div>
                <div className={style.message}>How are you doing?</div>
                <div className={style.message}>I'm good.</div>
            </div>
        </div >
    );
}