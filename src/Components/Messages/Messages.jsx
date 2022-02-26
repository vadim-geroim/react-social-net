import style from './Messages.module.css';
import { Message } from './Message/Message';
import { Post } from '../Post/Post';

export const Messages = (props) => {
    let state = props.store.getState();
    let messages = state.postPage.posts;
    const messageElements = messages.map(m => <Message key={m.id} text={m.data} />)

    return (
        <div className={style.message}>
            {messageElements}
        </div>
    );
}