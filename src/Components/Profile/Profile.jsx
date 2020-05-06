import React from 'react';
import MyPostContainer from "./MyPost/MyPostContainer";
import MyProfile from "./MyProfile/MyProfile";
import s from './Profile.module.css';


const Profile = (props) => {
    return (
        <div className={s.appProfile} >
            <div>
                <p>THIS IS PROFILE</p>
            </div>
            <div>
                <img className={s.profileBackground} src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt=""/>
            </div>
                <MyProfile />
            <div>
                <MyPostContainer store={props.store} />
            </div>
        </div>
    )
};

export default Profile;