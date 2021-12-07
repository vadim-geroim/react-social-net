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
    const dialogs = [
        { id: 1, name: "Super User" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
    ]

    const messages = [
        { id: 1, data: "Hello world." },
        { id: 2, data: "What is going on? " },
        { id: 3, data: "I'm so happy to see you!" }
    ]

    const messageElements = messages.map(m => <Message messageText={m.data} />);
    const dialogElements = dialogs.map(d => <Dialog id={d.id} userName={d.name} />)

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div >
    );
}