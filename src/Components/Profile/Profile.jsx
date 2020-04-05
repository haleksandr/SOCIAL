import React from 'react';
import MyPost from "./MyPost/MyPost";
import MyProfile from "./MyProfile/MyProfile";
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.appProfile} >
            <div>
                <p>THIS IS PROFILE</p>
            </div>
            <div>
                <img className={s.profileBackground} src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt=""/>
            </div>
                <MyProfile/>
            <div>
                <MyPost />
            </div>
        </div>
    )
}

export default Profile;