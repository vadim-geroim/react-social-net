import { Post } from "./Post";
import { Messages } from "../Messages/Messages";
import { PostPageType } from "../../redux/store";


export const Posts: React.FC<PostPageType> = (props) => {
    return (
        <div>
            <Messages postMessages={props.postPage.posts} />
            <Post textAreaValue={props.postPage.textAreaValue} dispatch={props.dispatch} />
        </div>
    );
}