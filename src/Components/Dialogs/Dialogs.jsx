import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( (dialog) => {
        return <Dialog id={dialog.id} name={dialog.name} />
    } );

   let usersElements = props.messages.map( (message) => {
       return <Message id={message.id} message={message.message} />
   } );

    return (
        <div className={s.appProfile}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messagesItems}>
                    { usersElements }
                </div>
            </div>
        </div>
    )
};

export default Dialogs;