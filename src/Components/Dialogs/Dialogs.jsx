import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.usersDialogs.map((dialog) => {
        return <Dialog id={dialog.id} name={dialog.name}/>
    });

    let usersElements = props.dialogsPage.usersMessage.map((message) => {
        return <Message id={message.id} message={message.message}/>
    });

    let messageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    };

    let addMessage = () => {
        props.onAddMessage();
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
                    <textarea onChange={messageChange} value={props.newMessageText}/>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;