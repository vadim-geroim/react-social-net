import style from './Message.module.css';
import icon from './message-icon.png';


export const Message = () => {
    return (
        <div >
            <div className={style.message}>
                <img src={icon} alt="Message icon" />
                <p className={style.text}>Hello world</p>
            </div>
        </div>
    );
}