import React from 'react';
import s from './Dialogs.module.css';
import Dialogs from './Dialogs';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {addMessageAC, updateNewMessageTextAC} from './../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState();

    /*let dialogsElements = state.dialogsPage.usersDialogs.map((dialog) => {
        return <Dialog id={dialog.id} name={dialog.name}/>
    });

    let usersElements = state.dialogsPage.usersMessage.map((message) => {
        return <Message id={message.id} message={message.message}/>
    });*/

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
                 dialogs={state}
                 users={state} />
    )
};

export default DialogsContainer;