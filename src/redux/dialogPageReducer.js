const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE:
            state.newMessageValue = action.text;
            return state;
        case ADD_NEW_MESSAGE:
            state.messages.push({
                id: 4,
                data: state.newMessageValue
            });
            state.newMessageValue = "";
            return state;
        default:
            return state;
    }
}

export const onChangeNewMessageCreator = (textVal) => ({ type: CHANGE_NEW_MESSAGE, text: textVal })
export const addNewMessageCreator = () => ({ type: ADD_NEW_MESSAGE });
