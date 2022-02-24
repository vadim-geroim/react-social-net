import { dialogPageReducer } from './dialogPageReducer';
import { postPageReducer } from './postPageReducer';

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
    dispatch(action) {
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action);
        this._state.postPage = postPageReducer(this._state.postPage, action);
        this._callSubscriber(this._state);
    }
}