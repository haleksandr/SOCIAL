import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <p>{props.message}</p>
            <p>like count: {props.likeCount}</p>
        </div>
    )
}

export default Post;