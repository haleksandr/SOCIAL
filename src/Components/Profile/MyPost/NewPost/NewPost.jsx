import React from 'react';
import s from './NewPost.module.css';
import {addPostAC, updateNewPostTextAC} from './../../../../redux/profile-reducer';
import store from './../../../../redux/state';

const NewPost = (props) => {
    let createNewElement = React.createRef();

    let addPostState = () => {
        props.dispatch(addPostAC())
    };

    let onPostChange = () => {
        let text = createNewElement.current.value;
        let action = updateNewPostTextAC(text);
        props.dispatch(action);
    };

    return (
        <div className={s.newPost}>
            <textarea ref={createNewElement} onChange={onPostChange} value={props.newPostText}/>
            <button onClick={addPostState}>ADD POST</button>
        </div>
    )
};

export default NewPost;