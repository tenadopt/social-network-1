import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

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
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
            </div>
            <div className={s.messages}>
                <Message id={messageData[0].id} message={messageData[0].name}/>
                <Message id={messageData[1].id} message={messageData[1].name}/>
                <Message id={messageData[2].id} message={messageData[2].name}/>
                <Message id={messageData[3].id} message={messageData[3].name}/>
                <Message id={messageData[4].id} message={messageData[4].name}/>
                <Message id={messageData[5].id} message={messageData[5].name}/>
            </div>
        </div>
    )
};