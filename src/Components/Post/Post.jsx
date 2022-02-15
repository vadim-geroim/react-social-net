import style from './Post.module.css';
import React from 'react';

export const Post = (props) => {
    const areaRef = React.createRef();

    const addPostHandler = () => {
        props.addPost()
    }

    const OnChangeTextFieldHandler = () => {
        props.changeTextAreaValue(areaRef.current.value);
    }

    return (
        <div className={style.posts}>
            <h2 className={style.title}>My posts</h2>
            <textarea ref={areaRef} className={style.field} value={props.textAreaValue} onChange={OnChangeTextFieldHandler}>
            </textarea>
            <a className={style.btn} href="#" onClick={addPostHandler}>Send</a>
        </div>
    );
}