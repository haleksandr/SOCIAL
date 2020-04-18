import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
// import {addPost, addSymbol, subscribe} from './redux/state';
import store from './redux/state';

let rerenderEntyreTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     addSymbol={store.addSymbol.bind(store)}
                     newPostText={store.newPostText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntyreTree(store.getState());

store.subscribe(rerenderEntyreTree);