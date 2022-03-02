import { Post } from "./Post";
import { connect } from "react-redux";
import { addPostActionCreator, onChangeTextFieldActionCreator } from '../../redux/postPageReducer';

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
