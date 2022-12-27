import React from 'react';
import classes from '../Navbar/Navbar.module.css'

export const Navbar = () => {
    return (
            <nav className={classes.navbar}>
                <div className={classes.item}>
                    <a>Profile</a>
                </div>
                <div className={classes.item}>
                    <a>Messages</a>
                </div>
                <div className={classes.item}>
                    <a>News</a>
                </div>
                <div className={classes.item}>
                    <a>Music</a>
                </div>
                <div className={classes.item}>
                    <a>Settings</a>
                </div>
            </nav>
    );
};