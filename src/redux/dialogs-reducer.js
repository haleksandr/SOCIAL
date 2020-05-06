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
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 3,
                message: state.newMessageText
            };
            /*state.usersMessage.push(newMessage);
            return state;*/
            let stateCopy = {...state};
            stateCopy.usersMessage = [...state.usersMessage];
            stateCopy.usersMessage.push(newMessage);
            stateCopy.usersMessage.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            /*state.newMessageText = action.newText;
            return state;*/
            let stateCopy = {...state};
            stateCopy.usersMessage = [...state.usersMessage];
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
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