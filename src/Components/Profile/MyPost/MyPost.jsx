import React from 'react';
import s from './MyPost.module.css';
import NewPostContainer from './NewPost/NewPostContainer';
import Post from './Post/Post';

const MyPost = (props) => {
    // debugger;

    let state = props.store.getState();

    let postElements = state.profilePage.postData.map( (post) => {
        return <Post likeCount={post.likeCount} message={post.messages} />
    } );

    return (
        <div className={s.myPost} >
            <p >MY POST</p>
            <NewPostContainer store={props.store} />
            { postElements }
        </div>
    )
};

export default MyPost;