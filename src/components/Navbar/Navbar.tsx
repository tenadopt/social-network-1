import React from 'react';
import s from '../Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";


type ClassNameFuncType = {
    isActive: boolean
}

export const Navbar = () => {

    const classNameFunc = ({isActive}: ClassNameFuncType) => (isActive ? "active_link" : "")

    return (
            <nav className={s.navbar}>
                <div className={s.item}>
                    <NavLink to='/profile' className={classNameFunc} >Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/messages' className={classNameFunc} >Messages</NavLink>
                </div>
                <div className={s.item}>
                    <a>News</a>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
            </nav>
    );
};