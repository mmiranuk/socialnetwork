import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Привет-это первое сообщение1', likesCount: 12},
        {id: 2, message: 'Привет-это первое сообщение2', likesCount: 17},
        {id: 3, message: 'Привет-это первое сообщение3', likesCount: 15},
        {id: 4, message: 'Привет-это первое сообщение4', likesCount: 45},

    ]
    let postsElements=[
        posts.map(p => <Post message = {p.message} likesCount={p.likesCount} />)
        ]
    return (
        <div className={s.postsBlock}>
            <h3> Мои посты </h3>
            <div>
                <div>
                    <textarea>TEST</textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
               {/* <Post message={postsData[0].message} id={postsData[0].id} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} id={postsData[1].id} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} id={postsData[2].id} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[3].message} id={postsData[3].id} likesCount={postsData[3].likesCount}/>*/}

            </div>
        </div>

    );
}
export default MyPosts;