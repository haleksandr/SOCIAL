/*
let rerenderEntyreTree = () => {
    console.log('state changed rerenderEntyreTree');
};

let state = {
    dialogsPage: {
        usersDialogs: [
            {id: 1, name: 'Aleksandr'},
            {id: 2, name: 'Sasha'}
        ],
        usersMessage: [
            {id: 1, message: 'HELLO'},
            {id: 2, message: 'HOW ARE YOU ?'}
]
    },
    profilePage: {
        postData: [
            {id: 1, likeCount: 123, messages: "FIRST POST"},
            {id: 2, likeCount: 321, messages: "SECOND POST"}
        ],
        newPostText: 'ALEKSANDR'
    },
    generalPage: {
        sitebar: [
            {id: 1, name: 'ALEKSANDR'},
            {id: 2, name: 'POL'},
            {id: 3, name: 'AARON'}
        ]
    }
};

export let addPost = (newMessage) => {
    let newPost = {
        id: 3,
        likeCount: 0,
        messages: newMessage
    };
    state.profilePage.postData.push(newPost);
    rerenderEntyreTree(state);
};

export let addSymbol = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntyreTree(state);
};

export let subscribe = (observer) => {
    rerenderEntyreTree = observer;
}

export default state;*/

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        dialogsPage: {
            usersDialogs: [
                {id: 1, name: 'Aleksandr'},
                {id: 2, name: 'Sasha'}
            ],
            usersMessage: [
                {id: 1, message: 'HELLO'},
                {id: 2, message: 'HOW ARE YOU ?'}
            ]
        },
        profilePage: {
            postData: [
                {id: 1, likeCount: 123, messages: "FIRST POST"},
                {id: 2, likeCount: 321, messages: "SECOND POST"}
            ],
            newPostText: 'ALEKSANDR'
        },
        generalPage: {
            sitebar: [
                {id: 1, name: 'ALEKSANDR'},
                {id: 2, name: 'POL'},
                {id: 3, name: 'AARON'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed rerenderEntyreTree');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === addPostAC) {
            let newPost = {
                id: 3,
                likeCount: 0,
                messages: action.newPostText
            };
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === updateNewPostTextAC) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }
    }
};

export let addPostAC = () => {
    return {
        type: ADD_POST
    }
};

export let updateNewPostTextAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}

export default store;