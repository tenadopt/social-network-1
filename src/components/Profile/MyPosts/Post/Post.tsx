import React from 'react';
import s from './Post.module.css';

type PostType = {
    id: number
    message: string
    likescount: number
}

export const Post = (props: PostType) => {
    return (
            <div className={s.dialog}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'/>
                {props.message}
                <div>
                    <span>Like</span>
                    <span>{props.likescount}</span>
                </div>
            </div>
    );
};