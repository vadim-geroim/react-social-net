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
    const dialogData = [
        { id: 1, name: "Super User" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
    ]

    const messagesData = [
        { id: 1, data: "Hello world." },
        { id: 2, data: "What is going on? " },
        { id: 3, data: "I'm so happy to see you!" }
    ]

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                <Dialog id={dialogData[0].id} userName={dialogData[0].name} />
                <Dialog id={dialogData[1].id} userName={dialogData[1].name} />
                <Dialog id={dialogData[2].id} userName={dialogData[2].name} />
                <Dialog id={dialogData[3].id} userName={dialogData[3].name} />
            </div>
            <div className={style.messages}>
                <Message messageText={messagesData[0].data} />
                <Message messageText={messagesData[1].data} />
                <Message messageText={messagesData[2].data} />
            </div>
        </div >
    );
}