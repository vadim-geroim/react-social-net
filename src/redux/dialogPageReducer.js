const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
    messages: [
        { id: 1, data: "Hello world!" },
        { id: 2, data: "What is going on? " },
        { id: 3, data: "I'm so happy to see you!" }
    ],

    userNames: [
        { id: 1, name: "Super User" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
    ],
    newMessageValue: "Please enter your message"
}

export const dialogPageReducer = (state = initialState, action) => {
    let newState = { ...state };
    newState.messages = [...newState.messages];

    switch (action.type) {
        case CHANGE_NEW_MESSAGE:
            newState.newMessageValue = action.text;
            return newState;
        case ADD_NEW_MESSAGE:
            newState.messages.push({
                id: 4,
                data: newState.newMessageValue
            });
            newState.newMessageValue = "";
            return newState;
        default:
            return state;
    }
}

export const onChangeNewMessageCreator = (textVal) => ({ type: CHANGE_NEW_MESSAGE, text: textVal })
export const addNewMessageCreator = () => ({ type: ADD_NEW_MESSAGE });
