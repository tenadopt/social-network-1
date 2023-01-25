import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {

}

const DialogItem = (props:DialogItemType) => {
    return
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog} >
                    <NavLink to='/dialogs/1' >Yury</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Artem</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/3">Happy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Yug</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Antony</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Lev</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>How are you</div>

            </div>
        </div>
    )
};