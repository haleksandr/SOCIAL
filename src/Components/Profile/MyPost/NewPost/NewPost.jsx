import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {

    let addPost = () => {
        props.onAddPost();
    };

    let postChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    };

    return (
        <div className={s.newPost}>
            <textarea onChange={postChange} value={props.newPostText}/>
            <button onClick={addPost}>ADD POST</button>
        </div>
    )
};

export default NewPost;