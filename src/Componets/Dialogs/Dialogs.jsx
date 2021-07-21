import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DiaologItems = (props) => {
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
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DiaologItems name="Максим" id="1"/>
                    <DiaologItems name="Таня" id="2"/>
                    <DiaologItems name="Таня" id="3"/>
                    <DiaologItems name="Юзверь" id="4"/>
                    <DiaologItems name="Коньзверь" id="5"/>
                    <DiaologItems name="Катапес" id="6"/>
                </div>
                <div className={s.messages}>
                    <Message message="Привет"/>
                    <Message message="Как дела?"/>
                    <Message message="Что нового?"/>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;