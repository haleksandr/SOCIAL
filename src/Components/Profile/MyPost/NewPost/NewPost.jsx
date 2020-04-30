import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    let createNewElement = React.createRef();

    let onAddPost = () => {
       props.addPost();
    };

    let onPostChange = () => {
        let text = createNewElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.newPost}>
            <textarea ref={createNewElement} onChange={onPostChange} value={props.newPostText}/>
            <button onClick={onAddPost}>ADD POST</button>
        </div>
    )
};

export default NewPost;