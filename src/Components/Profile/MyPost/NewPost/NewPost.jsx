import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {

    let onAddPost = () => {
       props.onAddPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    };

    return (
        <div className={s.newPost}>
            <textarea onChange={onPostChange} value={props.newPostText}/>
            <button onClick={onAddPost}>ADD POST</button>
        </div>
    )
};

export default NewPost;