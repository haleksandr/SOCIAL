const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, likeCount: 123, messages: "FIRST POST"},
        {id: 2, likeCount: 321, messages: "SECOND POST"}
    ],
    newPostText: ''
};


const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: 3, likeCount: 1337, messages: newPost}]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
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
        newText: text
    }
};

export default profileReducer;