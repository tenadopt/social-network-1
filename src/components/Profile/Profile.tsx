import React from 'react';
import classes from '../Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (

            <div className={classes.content}>
                <div>
                    <img
                        src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'/>
                </div>
                <div>
                    ava+sescription
                </div>
                <MyPosts />
            </div>
    );
};