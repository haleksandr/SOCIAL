import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPost = (psops) => {
    return (
        <div>
            <p>MY POST</p>
            <NewPost />
            <Post likeCount="2" message="FIRST POST" />
            <Post likeCount="22" message="SECOND POST" />
        </div>
    )
}

export default MyPost;