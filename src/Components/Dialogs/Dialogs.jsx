import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

debugger;
    // let state = props.dialogsPage;

    let dialogsElements = props.dialogs.usersDialogs.map((dialog) => {
        return <Dialog id={dialog.id} name={dialog.name}/>
    });

    let usersElements = props.users.usersMessage.map((message) => {
        return <Message id={message.id} message={message.message}/>
    });

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    };

    let addMessage = () => {
        props.addMessage();
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
                    <textarea onChange={onMessageChange} value={props.newMessageText}/>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;