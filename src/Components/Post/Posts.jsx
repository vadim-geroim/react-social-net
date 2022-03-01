import { PostContainer } from "./PostContainer";
import { MessagesContainer } from "../Messages/MessagesContainer";


export const Posts = (props) => {
    return (
        <div>
            <MessagesContainer store={props.store} />
            <PostContainer store={props.store} />
        </div>
    );
}