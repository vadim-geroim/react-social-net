import { Dialogs } from '../Dialogs/Dialogs';
import { connect } from 'react-redux';
import { onChangeNewMessageCreator, addNewMessageCreator } from '../../redux/dialogPageReducer';

const mapStateToProps = (state) => ({
    dialogPage: state.dialogPage
});

const mapDispatchToProps = (dispatch) => ({
    onChangeHandler: (text) => dispatch(onChangeNewMessageCreator(text)),
    onClickHandler: () => dispatch(addNewMessageCreator()),
    onFocusHandler: (message) => {
        if (message === "Please enter your message") {
            return dispatch(onChangeNewMessageCreator(""));
        }
    }
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);