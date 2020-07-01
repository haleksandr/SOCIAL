import React from 'react';
import s from './Users.module.css';
import fixedAvatar from './../../assets/img/fixed-avatar.jpg';

import * as axios from 'axios';


const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers();
        })
    };

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos != null ? u.photos : fixedAvatar } className={s.usersAvatar} alt=""/>
                        </div>
                        <div>e
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>UNFOLLOW</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>FOLLOW</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {/*{u.location.city}*/}
                            </div>
                            <div>
                                {/*{u.location.country}*/}
                            </div>
                        </span>

                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;