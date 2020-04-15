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
        ]
    },
    generalPage: {
        sitebar: [
            {id: 1, name: 'ALEKSANDR'},
            {id: 2, name: 'POL'},
            {id: 3, name: 'AARON'}
        ]
    }
};

export let addPost = (newTextPost) => {
    let newPost = {
        id: 3,
        likeCount: 0,
        messages: newTextPost
    };
    state.profilePage.postData.push(newPost);
};

export default state;