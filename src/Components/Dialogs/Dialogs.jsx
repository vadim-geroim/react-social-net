import style from './Dialogs.module.css';
import React from 'react';
import { Dialog } from './Dialog/Dialog';
import { DMessage } from './DMessage/DMessage';

export const Dialogs = (props) => {
    const messageElements = props.dialogPage.messages.map(m => <DMessage key={m.id} messageText={m.data} />);
    const dialogElements = props.dialogPage.userNames.map(d => <Dialog key={d.id} id={d.id} userName={d.name} />);
    const areaRef = React.createRef();

    const onClickHandler = () => {
        props.onClickHandler();
    }

    const onChangeHandler = () => {
        props.onChangeHandler(areaRef.current.value);
    }

    const onFocusHandler = () => {
        props.onFocusHandler(props.dialogPage.newMessageValue);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={areaRef} className={style.textarea} onFocus={onFocusHandler} onChange={onChangeHandler} value={props.dialogPage.newMessageValue}></textarea>
                <a className={style.btn} href="#" onClick={onClickHandler}>Send Message</a>
            </div>
        </div >
    );
}