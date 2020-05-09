import React from 'react';
import {connect} from 'react-redux';
import {addPostAC, updateNewPostTextAC} from './../../../../redux/profile-reducer';
import NewPost from './NewPost';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostAC());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextAC(text));
        }
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;