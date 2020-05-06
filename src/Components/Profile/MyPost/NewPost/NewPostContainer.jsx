import React from 'react';
import {connect} from 'react-redux';
import {addPostAC, updateNewPostTextAC} from './../../../../redux/profile-reducer';
import NewPost from './NewPost';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostAC());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextAC(text));
            console.log(text);
        }
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;