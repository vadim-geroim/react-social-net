import style from './Messages.module.css';
import { Message } from './Message/Message';
import { Post } from '../Post/Post';

export const Messages = () => {
    return (
        <div className={style.message}>
            <Message text="Hello! How are you?" />
            <Message text="Hi! I'm fine." />
            <Post />
        </div>
    );
}