import React from 'react';
import {connect} from 'react-redux';
import MyPost from './MyPost';


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;