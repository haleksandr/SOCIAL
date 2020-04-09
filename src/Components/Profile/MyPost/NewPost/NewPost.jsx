import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <div className={s.newPost}>
            <input value="your news..." type="text"/>
            <button>ADD POST</button>
        </div>
    )
}

export default NewPost;