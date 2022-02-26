import { PostContainer } from "./PostContainer";
import { Messages } from "../Messages/Messages";


export const Posts = (props) => {
    return (
        <div>
            <Messages store={props.store} />
            <PostContainer store={props.store} />
        </div>
    );
}