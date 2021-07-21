import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg'></img>
      {props.message} 
      <div className={s.likes}>
        <span>Likes</span> {props.likesCount}
      </div>
    </div>

  );
}
// const Likecounter = (props) =>{
//   <div className={s.item}>
//   {props.message}
//   </div>
// }

export default Post;