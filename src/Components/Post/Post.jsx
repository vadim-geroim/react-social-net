import style from './Post.module.css';
import React from 'react';

export const Post = (props) => {
    const areaRef = React.createRef();

    const addPostHandler = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    const OnChangeTextFieldHandler = () => {
        props.dispatch({ type: 'CHANGE-TEXT-AREA-VALUE', text: areaRef.current.value });
    }

    const OnFocusHandler = () => {
        if (props.textAreaValue === "Please enter your post here") {
            props.dispatch({ type: 'CHANGE-TEXT-AREA-VALUE', text: "" })
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