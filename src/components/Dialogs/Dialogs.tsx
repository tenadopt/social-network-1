import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Yury'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Happy'},
        {id: 4, name: 'Yug'},
        {id: 5, name: 'Antony'},
        {id: 6, name: 'Lev'}
    ]

    let messageData = [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'Yo'},
        {id: 3, name: 'How are you'},
        {id: 4, name: 'Yo'},
        {id: 5, name: 'Yo'},
        {id: 6, name: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog} >
                    <NavLink to='/dialogs/1' ><DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/></NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2"><DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/></NavLink>
                </div>
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/3">Happy</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/4">Yug</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/5">Antony</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to="/dialogs/6">Lev</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={s.messages}>
                <Message id={messageData[0].id} message={messageData[0].name}/>
                <Message id={messageData[0].id} message={messageData[0].name}/>
            </div>
        </div>
    )
};