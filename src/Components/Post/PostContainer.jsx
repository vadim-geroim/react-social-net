import { Post } from "./Post";
import { connect } from "react-redux";
import { addPostActionCreator, onChangeTextFieldActionCreator } from '../../redux/postPageReducer';


// export const PostContainer = (props) => {
//     let state = props.store.getState();
//     let textAreaValue = state.postPage.textAreaValue;

//     const addPostHandler = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     const onChangeTextFieldHandler = (text) => {
//         props.store.dispatch(onChangeTextFieldActionCreator(text));
//     }

//     const onFocusHandler = () => {
//         if (textAreaValue === "Please enter your post here") {
//             props.store.dispatch(onChangeTextFieldActionCreator(""))
//         }
//     }


//     return (<Post textAreaValue={textAreaValue}
//         addPostHandler={addPostHandler}
//         onChangeTextFieldHandler={onChangeTextFieldHandler}
//         onFocusHandler={onFocusHandler} />)
// }

const mapStateToProps = (state) => ({
    textAreaValue: state.postPage.textAreaValue
});

const mapDispatchToProps = (dispatch) => ({
    addPostHandler: () => dispatch(addPostActionCreator()),
    onChangeTextFieldHandler: (text) => dispatch(onChangeTextFieldActionCreator(text)),
    onFocusHandler: (text) => {
        if (text === "Please enter your post here") {
            return dispatch(onChangeTextFieldActionCreator(""));
        }
    }
});

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
