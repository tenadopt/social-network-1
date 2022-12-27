import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likecount: number
}

export const Post = (props: PostType) => {
    return (
            <div className={s.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'/>
                {props.message}
                <div>
                    <span>Like</span>
                    <span>{props.likecount}</span>
                </div>
            </div>
    );
};