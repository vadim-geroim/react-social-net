import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { Dialog } from './Dialog/Dialog';
import { DMessage } from './DMessage/DMessage';

export const Dialogs = (props) => {
    const messageElements = props.dialogPage.messageList.map(m => <DMessage messageText={m.data} />);
    const dialogElements = props.dialogPage.dialogList.map(d => <Dialog id={d.id} userName={d.name} />)

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div >
    );
}