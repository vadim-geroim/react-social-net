import style from './Messages.module.css';
import { Message } from './Message/Message';
import { Post } from '../Post/Post';

export const Messages = () => {
    const messages = [
        { id: 1, data: "Hello my friend!" },
        { id: 2, data: "What's going on?" },
        { id: 3, data: "How was your trip to Europe? " }
    ]
    const messageElements = messages.map(m => <Message text={m.data} />)

    return (
        <div className={style.message}>
            {messageElements}
        </div>
    );
}