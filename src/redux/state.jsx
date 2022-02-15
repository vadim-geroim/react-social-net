let renderDOM;

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

let state: RootState = {
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
}

export const changeTextAreaValue = (text) => {
    state.postPage.textAreaValue = text;
    renderDOM(state, addPost, changeTextAreaValue)
}

export const addPost = () => {
    state.postPage.posts.push({
        id: 4,
        data: state.postPage.textAreaValue
    });
    state.postPage.textAreaValue = "";
    renderDOM(state, addPost, changeTextAreaValue);
}

export let subscribe = (observer) => {
    renderDOM = observer;
}

export default state;