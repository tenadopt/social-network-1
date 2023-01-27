import React from 'react';
import classes from '../Profile/Profile.module.css'
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
            <div className={classes.content}>
                <ProfileInfo />
                <MyPosts />
            </div>
    );
};