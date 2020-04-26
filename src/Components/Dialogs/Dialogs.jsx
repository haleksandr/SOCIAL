import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {addMessageAC, updateNewMessageTextAC} from './../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let createNewMessage = React.createRef();

    let dialogsElements = props.dialogs.map((dialog) => {
        return <Dialog id={dialog.id} name={dialog.name}/>
    });

    let usersElements = props.messages.map((message) => {
        return <Message id={message.id} message={message.message}/>
    });

    let onMessageChange = () => {
        let text = createNewMessage.current.value;
        let action = updateNewMessageTextAC(text);
        props.dispatch(action);
        console.log('change message')
    };

    let addMessage = () => {
        props.dispatch(addMessageAC());
        console.log('add message');
    };

    return (
        <div className={s.appProfile}>
            <h3>DIALOGS</h3>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <p className={s.dialog}>NAME:</p>
                    {dialogsElements}
                </div>
                <div className={s.messagesItems}>
                    <p className={s.dialog}>MESSAGE:</p>
                    {usersElements}
                </div>
                <div className={s.addMessage}>
                    <p>ADD MESSAGE:</p>
                    <textarea ref={createNewMessage} onChange={onMessageChange} value={props.newMessageText}/>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;