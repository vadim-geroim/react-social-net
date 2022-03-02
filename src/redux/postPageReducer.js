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
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                textAreaValue: "",
                posts: [...state.posts, { id: 4, data: state.textAreaValue }]
            };
        case CHANGE_TEXT_AREA_VALUE:
            return {
                ...state,
                textAreaValue: action.text
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onChangeTextFieldActionCreator = (textVal) => ({ type: CHANGE_TEXT_AREA_VALUE, text: textVal });
