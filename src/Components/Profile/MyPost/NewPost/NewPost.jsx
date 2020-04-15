import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {

    let createNewElement = React.createRef();

    let alertText = () => {
        let fixedText = createNewElement.current.value;
        props.addPost(fixedText);
        console.log('add');
    }

    return (
        <div className={s.newPost}>
            <input ref={createNewElement} type="text"/>
            <button onClick={ alertText }>ADD POST</button>
        </div>
    )
};

export default NewPost;