const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA_VALUE = 'CHANGE-TEXT-AREA-VALUE';

let initialState = {
    posts: [
        { id: 1, data: "Hello my friend!" },
        { id: 2, data: "What's going on?" },
        { id: 3, data: "How was your trip to Europe? " }
    ],
    textAreaValue: "Please enter your post here"
}

export const postPageReducer = (state = initialState, action) => {
    let newState = { ...state };
    newState.posts = [...newState.posts];

    switch (action.type) {
        case ADD_POST:
            newState.posts.push({
                id: 4,
                data: newState.textAreaValue
            });
            newState.textAreaValue = "";
            return newState;
        case CHANGE_TEXT_AREA_VALUE:
            newState.textAreaValue = action.text;
            return newState;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onChangeTextFieldActionCreator = (textVal) => ({ type: CHANGE_TEXT_AREA_VALUE, text: textVal });
