import React from 'react';
import s from './MyPost.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPost = (psops) => {

    let postData = [
        {id: 1, likeCount: 123, message: "FIRST POST"},
        {id: 2, likesCount: 321, message: "SECOND POST"}
    ]

    return (
        <div className={s.myPost} >
            <p >MY POST</p>
            <NewPost />
            <Post likeCount={postData[0].likeCount} message={postData[0].message} />
            <Post likeCount={postData[1].likesCount} message={postData[1].message} />
        </div>
    )
}

export default MyPost;