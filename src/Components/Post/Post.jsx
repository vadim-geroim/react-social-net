import style from './Post.module.css';
import React from 'react';
import { addPostActionCreator, onChangeTextFieldActionCreator } from '../../redux/postPageReducer';

export const Post = (props) => {
    const areaRef = React.createRef();

    const addPostHandler = () => {
        props.dispatch(addPostActionCreator());
    }

    const OnChangeTextFieldHandler = () => {
        props.dispatch(onChangeTextFieldActionCreator(areaRef.current.value));
    }

    const OnFocusHandler = () => {
        if (props.textAreaValue === "Please enter your post here") {
            props.dispatch(onChangeTextFieldActionCreator(""))
        }
    }

    return (
        <div className={style.posts}>
            <h2 className={style.title}>My posts</h2>
            <textarea ref={areaRef}
                className={style.field}
                value={props.textAreaValue}
                onChange={OnChangeTextFieldHandler}
                onFocus={OnFocusHandler}>
            </textarea>
            <a className={style.btn} href="#" onClick={addPostHandler}>Send</a>
        </div>
    );
}