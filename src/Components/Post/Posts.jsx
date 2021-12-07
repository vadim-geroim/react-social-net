import { Post } from "./Post";
import { Messages } from "../Messages/Messages";

export const Posts = () => {
    return (
        <div>
            <Messages />
            <Post />
        </div>
    );
}