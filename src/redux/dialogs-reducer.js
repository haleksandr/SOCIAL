const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    usersDialogs: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Sasha'}
    ],
    usersMessage: [
        {id: 1, message: 'HELLO'},
        {id: 2, message: 'HOW ARE YOU ?'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                usersMessage: [...state.usersMessage, {id: 3, message: newMessage}]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

export let addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
};

export let updateNewMessageTextAC = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
};

export default dialogsReducer;