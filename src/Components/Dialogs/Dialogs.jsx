import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { Dialog } from './Dialog/Dialog';
import { DMessage } from './DMessage/DMessage';

export const Dialogs = (props) => {
    const messageElements = props.dialogPage.messages.map(m => <DMessage key={m.id} messageText={m.data} />);
    const dialogElements = props.dialogPage.dialogs.map(d => <Dialog key={d.id} id={d.id} userName={d.name} />)

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