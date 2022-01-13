import style from './Messages.module.css';
import { Message } from './Message/Message';
import { Post } from '../Post/Post';

export const Messages = (props) => {

    const messageElements = props.postMessages.map(m => <Message key={m.id} text={m.data} />)

    return (
        <div className={style.message}>
            {messageElements}
        </div>
    );
}