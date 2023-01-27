import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    return (
            <div className={s.dialog} >
                <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
            </div>
    );
};