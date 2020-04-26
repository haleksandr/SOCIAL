import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import menuReducer from './menu-reducer';


export let store = {
    _state: {
        dialogsPage: {
            usersDialogs: [
                {id: 1, name: 'Aleksandr'},
                {id: 2, name: 'Sasha'}
            ],
            usersMessage: [
                {id: 1, message: 'HELLO'},
                {id: 2, message: 'HOW ARE YOU ?'}
            ],
            newMessageText: ''
        },
        profilePage: {
            postData: [
                {id: 1, likeCount: 123, messages: "FIRST POST"},
                {id: 2, likeCount: 321, messages: "SECOND POST"}
            ],
            newPostText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.generalPage = menuReducer(this._state.generalPage, action);

        this._callSubscriber(this._state);
    }
};


export default store;