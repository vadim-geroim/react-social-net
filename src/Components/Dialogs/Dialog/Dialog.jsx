import { NavLink } from "react-router-dom";
import style from './Dialog.module.css';

export const Dialog = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    );
}