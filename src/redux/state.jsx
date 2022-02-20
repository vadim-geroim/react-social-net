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

export let store = {
    _state: {
        dialogPage: {
            messages: [
                { id: 1, data: "Hello world!" },
                { id: 2, data: "What is going on? " },
                { id: 3, data: "I'm so happy to see you!" }
            ],

            dialogs: [
                { id: 1, name: "Super User" },
                { id: 2, name: "User 2" },
                { id: 3, name: "User 3" },
                { id: 4, name: "User 4" },
            ]
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
        this._callSubscriber(this._state, this.addPost, this.changeTextAreaValue)
    },
    _addPost() {
        this._state.postPage.posts.push({
            id: 4,
            data: this._state.postPage.textAreaValue
        });
        this._state.postPage.textAreaValue = "";
        this._callSubscriber(this._state, this.addPost, this.changeTextAreaValue);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'CHANGE-TEXT-AREA-VALUE') {
            this._changeTextAreaValue(action.text);
        }
    }

}