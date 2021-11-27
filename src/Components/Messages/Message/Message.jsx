import style from './Message.module.css';
import icon from './message-icon.png';


export const Message = (props) => {
    return (
        <>
            <div className={style.message}>
                <img src={icon} alt="Message icon" />
                <p className={style.text}>{props.text}</p>
            </div>
        </>
    );
}