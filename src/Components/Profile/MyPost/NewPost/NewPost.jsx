import React from 'react';
import s from './NewPost.module.css';
import state from '../../../../redux/state';

const NewPost = (props) => {
    // debugger;
    let createNewElement = React.createRef();

    let addPostState = () => {
        // debugger;
        let text = createNewElement.current.value;
        props.addPost(text);
        console.log(text);
    };

    let addSymbolState = () => {
        let symbol = createNewElement.current.value;
        props.addSymbol(symbol);
        console.log(symbol);
    };

    return (
        <div className={s.newPost}>
            <textarea ref={createNewElement} onChange={addSymbolState} value={props.newPostText} />
            <button onClick={ addPostState }>ADD POST</button>
        </div>
    )
};

export default NewPost;