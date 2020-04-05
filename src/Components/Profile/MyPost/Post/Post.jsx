import React from 'react';

const Post = (props) => {
    return (
        <div>
            <p>{props.message}</p>
            <p>like count: {props.likeCount}</p>
        </div>
    )
}

export default Post;