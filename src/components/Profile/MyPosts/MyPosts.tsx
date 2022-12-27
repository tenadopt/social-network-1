import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className='posts'>
                Old post
                <Post message='How are you?' likecount={15}/>
                <Post message="It's my first post" likecount={20}/>
            </div>
        </div>
    );
};