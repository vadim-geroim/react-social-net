import style from './Dialogs.module.css';
import { Messages } from '../Messages/Messages';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.messageText}</div>
    );
}

export const Dialogs = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                <Dialog id={1} userName="User 1" />
                <Dialog id={2} userName="User 2" />
                <Dialog id={3} userName="User 3" />
                <Dialog id={4} userName="User 4" />
            </div>
            <div className={style.messages}>
                <Message messageText="Hello world!" />
                <Message messageText="The world is great!" />
                <Message messageText="What a beautiful day!!!" />
            </div>
        </div >
    );
}