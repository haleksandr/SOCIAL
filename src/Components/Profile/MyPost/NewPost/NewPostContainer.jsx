import React from 'react';
import s from './NewPost.module.css';
import {addPostAC, updateNewPostTextAC} from './../../../../redux/profile-reducer';
import NewPost from './NewPost';

const NewPostContainer = (props) => {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostAC())
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextAC(text);
        props.store.dispatch(action);
    };

    return (
        <NewPost addPost={onAddPost} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} />
    )
};

export default NewPostContainer;