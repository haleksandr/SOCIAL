import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import menuReducer from "./menu-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    menuPage: menuReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;