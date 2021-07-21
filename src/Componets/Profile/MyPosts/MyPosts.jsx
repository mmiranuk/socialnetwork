import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3> Мои посты </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Привет-это первое сообщение' Likecoutret='0'/>
                <Post message='Привет-это второе сообщение' Likecoutret='10'/>
                <Post message='Привет-это третье сообщение' Likecoutret='20'/>
                <Post message='Привет-это четвертое сообщение' Likecoutret='30'/>

            </div>
        </div>

    );
}
export default MyPosts;