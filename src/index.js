import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/store';

let rerenderEntyreTree = (state) => {
    // debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntyreTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntyreTree(state);
});