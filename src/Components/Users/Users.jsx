import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt=""/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={ () => { props.unfollow(u.id) } }>UNFOLLOW</button>
                                    : <button onClick={ () => { props.follow(u.id) } }>FOLLOW</button>
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
                                {u.location.city}
                            </div>
                            <div>
                                {u.location.country}
                            </div>
                        </span>

                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;