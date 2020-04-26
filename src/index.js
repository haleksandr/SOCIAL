import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/state';

let rerenderEntyreTree = (state) => {
    // debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     newPostText={store.getState().newPostText}
                     newMessageText={store.getState().newMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntyreTree(store.getState());

store.subscribe(rerenderEntyreTree);