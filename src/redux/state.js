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
    addPost(newMessage) {
        let newPost = {
            id: 3,
            likeCount: 0,
            messages: newMessage
        };
        this._state.profilePage.postData.push(newPost);
        this._callSubscriber(this._state);
    },
    addSymbol(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
       this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('state changed rerenderEntyreTree');
    }
};

export default store;