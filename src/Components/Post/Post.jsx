import style from './Post.module.css';
import React from 'react';

export const Post = () => {
    const areaRef = React.createRef();

    const onClickHandler = () => {
        alert(areaRef.current.value);
        areaRef.current.value = "";
    }

    return (
        <div className={style.posts}>
            <h2 className={style.title}>My posts</h2>
            <textarea ref={areaRef} className={style.field}>
            </textarea>
            <a className={style.btn} href="#" onClick={onClickHandler}>Send</a>
        </div>
    );
}