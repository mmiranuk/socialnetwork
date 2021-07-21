import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}
        </div>
    )
}
const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Максим'},
        {id: 2, name: 'Таня'},
        {id: 3, name: 'Таня'},
        {id: 4, name: 'Юзверь'},
        {id: 5, name: 'Коньзверь'},
        {id: 6, name: 'Катапес'},
        {id: 7, name: 'Катапес'}
    ]
    let messages = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Нового что есть?'},

    ]

        let dialogsElements = dialogs.map( d => <DialogItem name = {d.name} id={d.id} />);
    let messagesElements =
        messages.map(m => <Message message = {m.message} id={m.id} />);



    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>

    )
}

export default Dialogs;