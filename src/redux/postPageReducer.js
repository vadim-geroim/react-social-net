const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA_VALUE = 'CHANGE-TEXT-AREA-VALUE';

export const postPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({
                id: 4,
                data: state.textAreaValue
            });
            state.textAreaValue = "";
            return state;
        case CHANGE_TEXT_AREA_VALUE:
            state.textAreaValue = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onChangeTextFieldActionCreator = (textVal) => ({ type: CHANGE_TEXT_AREA_VALUE, text: textVal });
