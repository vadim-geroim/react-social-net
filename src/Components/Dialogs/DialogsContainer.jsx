import { Dialogs } from '../Dialogs/Dialogs';
import { onChangeNewMessageCreator, addNewMessageCreator } from '../../redux/dialogPageReducer';

export const DialogsContainer = (props) => {
    let state = props.store.getState();

    let dialogPage = state.dialogPage;

    let onChangeHandler = (text) => {
        props.store.dispatch(onChangeNewMessageCreator(text));
    }

    let onClickHandler = () => {
        props.store.dispatch(addNewMessageCreator());
    }

    let onFocusHandler = () => {
        if (dialogPage.newMessageValue === "Please enter your message") {
            props.store.dispatch(onChangeNewMessageCreator(""));
        }
    }

    return <Dialogs dialogPage={dialogPage} onChangeHandler={onChangeHandler} onClickHandler={onClickHandler} onFocusHandler={onFocusHandler} />
}