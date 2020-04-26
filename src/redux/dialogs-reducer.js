const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 3,
            message: state.newMessageText
        };
        state.usersMessage.push(newMessage);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }

    return state;
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