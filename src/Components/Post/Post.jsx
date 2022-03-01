import style from './Post.module.css';
import React from 'react';

export const Post = (props) => {
    const areaRef = React.createRef();

    const addPostHandler = () => {
        props.addPostHandler();
    }

    const onChangeTextFieldHandler = () => {
        props.onChangeTextFieldHandler(areaRef.current.value);
    }

    const onFocusHandler = () => {
        props.onFocusHandler(props.textAreaValue);
    }

    return (
        <div className={style.posts}>
            <h2 className={style.title}>My posts</h2>
            <textarea ref={areaRef}
                className={style.field}
                value={props.textAreaValue}
                onChange={onChangeTextFieldHandler}
                onFocus={onFocusHandler}>
            </textarea>
            <a className={style.btn} href="#" onClick={addPostHandler}>Send</a>
        </div>
    );
}