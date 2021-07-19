import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg'></img>
      </div>
      <div>
        ava and description
      </div>
     <MyPosts />
      </div>


    
  );
}
export default Profile;