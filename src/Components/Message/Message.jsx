import style from './Message.module.css';


export const Message = () => {
    return (
        <div >
            <div className={style.message}>
                <img src="#" alt="Message icon" />
                <p className={style.text}>Hello world</p>
            </div>
        </div>
    );
}