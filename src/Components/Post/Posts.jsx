import { Post } from "./Post";
import { Messages } from "../Messages/Messages";
import { PostPageType } from "../../redux/state";


export const Posts: React.FC<PostPageType> = (props) => {
    return (
        <div>
            <Messages postMessages={props.postPage.posts} />
            <Post addPost={props.addPost} textAreaValue={props.postPage.textAreaValue} changeTextAreaValue={props.changeTextAreaValue} />
        </div>
    );
}