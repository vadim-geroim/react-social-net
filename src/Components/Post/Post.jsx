import style from './Post.module.css';

export const Post = () => {
    return (
        <div className={style.posts}>
            <h2 className={style.title}>My posts</h2>
            <div className={style.field}>
            </div>
            <a className={style.btn} href="#">Send</a>
        </div>
    );
}