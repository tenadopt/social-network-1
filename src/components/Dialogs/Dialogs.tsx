import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Yury
                </div>
                <div className={s.dialog}>
                    Artem
                </div>
                <div className={s.dialog}>
                    Happy
                </div>
                <div className={s.dialog}>
                    Yug
                </div>
                <div className={s.dialog}>
                    Antony
                </div>
                <div className={s.dialog}>
                    Lev
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