const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA_VALUE = 'CHANGE-TEXT-AREA-VALUE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


type MessageType = {
    id: Number;
    data: String;
}

type DialogType = {
    id: Number;
    name: String;
}

type DialogPageType = {
    messages: Array<MessageType>;
    dialogs: Array<DialogType>;
}

type PostType = {
    id: Number;
    data: String;
}

type PostPageType = {
    posts: Array<PostType>;
    addPost: (text: number) => void;
    textAreaValue: String;
}

type RootState = {
    dialogPage: DialogPageType;
    postPage: PostPageType;
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onChangeTextFieldActionCreator = (textVal) => ({ type: CHANGE_TEXT_AREA_VALUE, text: textVal });
export const onChangeNewMessageCreator = (textVal) => ({ type: CHANGE_NEW_MESSAGE, text: textVal })
export const addNewMessageCreator = () => ({ type: ADD_NEW_MESSAGE });

export let store = {
    _state: {
        dialogPage: {
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
        },
        postPage: {
            posts: [
                { id: 1, data: "Hello my friend!" },
                { id: 2, data: "What's going on?" },
                { id: 3, data: "How was your trip to Europe? " }
            ],
            textAreaValue: "Please enter your post here"
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() { },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _changeTextAreaValue(text) {
        this._state.postPage.textAreaValue = text;
        this._callSubscriber(this._state, this.addPost, this._changeTextAreaValue)
    },
    _changeMessageValue(text) {
        this._state.dialogPage.newMessageValue = text;
        this._callSubscriber(this._state, this._changeMessageValue);
    },
    _addPost() {
        this._state.postPage.posts.push({
            id: 4,
            data: this._state.postPage.textAreaValue
        });
        this._state.postPage.textAreaValue = "";
        this._callSubscriber(this._state);
    },
    _addMessage() {
        this._state.dialogPage.messages.push({
            id: 4,
            data: this._state.dialogPage.newMessageValue
        });
        this._state.dialogPage.newMessageValue = "";
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'CHANGE-TEXT-AREA-VALUE') {
            this._changeTextAreaValue(action.text);
        } else if (action.type === 'CHANGE-NEW-MESSAGE') {
            this._changeMessageValue(action.text);
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            this._addMessage();
        }
    }
}