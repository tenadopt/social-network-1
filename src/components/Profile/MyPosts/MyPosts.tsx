import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'Yo', likesCount: 16}
    ]

    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className='posts'>
                Old post
                <Post id={postData[0].id} message={postData[0].message} likescount={postData[0].likesCount}/>
                <Post id={postData[1].id} message={postData[1].message} likescount={postData[1].likesCount}/>
            </div>
        </div>
    );
};