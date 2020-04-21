import React from 'react';
import s from './NewPost.module.css';
import {addPostAC, updateNewPostTextAC} from './../../../../redux/state';

const NewPost = (props) => {

    let createNewElement = React.createRef();

    let addPostState = () => {
        debugger;
        // let text = createNewElement.current.value;
        // let action = addPostAC(text);
        props.dispatch(addPostAC());
        console.log('add post button');
    };


    /*let addSymbolState = () => {
        let symbol = createNewElement.current.value;
        let action = addSymbolAC(symbol);
        props.dispatch(action);
    };*/

    let onPostChange = () => {
        let text = createNewElement.current.value;
        props.dispatch(updateNewPostTextAC(text));
        console.log('change post');
    }

    return (
        <div className={s.newPost}>
            <textarea ref={createNewElement} onChange={onPostChange} value={props.newPostText}/>
            <button onClick={addPostState}>ADD POST</button>
        </div>
    )
};

export default NewPost;