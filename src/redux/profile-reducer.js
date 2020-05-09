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

    let stateCopy = {
        ...state
    };

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                likeCount: 0,
                messages: state.newPostText
            };
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.postData.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.postData = [...state.postData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return stateCopy;
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