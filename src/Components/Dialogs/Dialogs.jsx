import style from './Dialogs.module.css';
import { Messages } from '../Messages/Messages';
import { Post } from '../Post/Post';

export const Dialogs = () => {
    return (
        <>
            <Messages />
            <Post />
        </>
    );
}