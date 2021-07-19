import React from 'react';
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
      <div>
        my posts
        <div>
          new post
        </div>
      </div>
      <div className='Posts'>
        <div className={s.item}>
          Post1
        </div>
        <div className={s.item}>
          post2
        </div>
      </div>


    </div>
  );
}
export default Profile;