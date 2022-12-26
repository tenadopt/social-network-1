import React from 'react';
import classes from './Profile.module.css'

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
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div className='posts'>
                        Old post
                        <div className={classes.item}>post 1</div>
                        <div className={classes.item}>post 2</div>
                    </div>
                </div>
            </div>
    );
};