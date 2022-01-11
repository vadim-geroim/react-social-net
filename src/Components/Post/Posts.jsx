import { Post } from "./Post";
import { Messages } from "../Messages/Messages";

export const Posts = (props) => {
    return (
        <div>
            <Messages postMessages={props.postPage.postMessages} />
            <Post />
        </div>
    );
}