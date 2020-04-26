import React from 'react';
import s from './MyPost.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPost = (props) => {
    // debugger;

    let postElements = props.post.map( (post) => {
        return <Post likeCount={post.likeCount} message={post.messages} />
    } );

    return (
        <div className={s.myPost} >
            <p >MY POST</p>
            <NewPost dispatch={props.dispatch} newPostText={props.newPostText} />
            { postElements }
        </div>
    )
};

export default MyPost;