import style from './Messages.module.css';
import { Message } from './Message/Message';

export const Messages = () => {
    return (
        <div className={style.wrapper}>
            <Message />
            <Message />
        </div>
    );
}