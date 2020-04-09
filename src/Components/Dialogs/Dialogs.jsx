import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.message}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {

    let userDialogs = [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Sasha'}
    ];

    let dialogsElements = userDialogs.map((dialog) => {
        return <Dialog name={dialog.name} id={dialog.id} />
    })

    let userMessage = [
        {id: 1, message: 'HELLO'},
        {id: 2, message: 'HOW ARE YOU ?'}
    ];

    let userElements = userMessage.map((user) => {
        return <Message message={user.message} id={user.id} />
    })

    return (
        <div className={s.appProfile}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messagesItems}>
                    { userElements }
                </div>
            </div>
        </div>
    )
}

export default Dialogs;