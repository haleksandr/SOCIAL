import React from 'react';
import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {addMessageAC, updateNewMessageTextAC} from './../../redux/dialogs-reducer';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextAC(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;