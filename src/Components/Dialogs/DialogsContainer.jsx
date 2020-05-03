import React from 'react';
import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {addMessageAC, updateNewMessageTextAC} from './../../redux/dialogs-reducer';

/*const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextAC(text));
    };

    let onAddMessage = () => {
        props.store.dispatch(addMessageAC());
    };

    return (
        <Dialogs addMessage={onAddMessage}
                 newMessageText={state.newMessageText}
                 updateNewMessage={onMessageChange}
                 state={state} />
    )
};*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
            console.log("click add message")
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessageTextAC(text));
            console.log("change input " + text)
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;