import style from './DMessage.module.css';

export const DMessage = (props) => {
    return (
        <div className={style.message}>{props.messageText}</div>
    );
}