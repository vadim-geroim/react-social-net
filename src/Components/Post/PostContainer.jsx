import { Post } from "./Post";
import { addPostActionCreator, onChangeTextFieldActionCreator } from '../../redux/postPageReducer';


export const PostContainer = (props) => {
    let state = props.store.getState();
    let textAreaValue = state.postPage.textAreaValue;

    const addPostHandler = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onChangeTextFieldHandler = (text) => {
        props.store.dispatch(onChangeTextFieldActionCreator(text));
    }

    const onFocusHandler = () => {
        if (textAreaValue === "Please enter your post here") {
            props.store.dispatch(onChangeTextFieldActionCreator(""))
        }
    }


    return (<Post textAreaValue={textAreaValue}
        addPostHandler={addPostHandler}
        onChangeTextFieldHandler={onChangeTextFieldHandler}
        onFocusHandler={onFocusHandler} />)
}