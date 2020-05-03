import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import Sitebar from '../Sitebar/Sitebar';

const Menu = (props) => {
    return (
        <div className={s.appMenu} >
            <nav>
                <ul className={s.items}>
                    <li>
                        <NavLink className={s.item} activeClassName={s.activeItem} to="/profile" >Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.item} activeClassName={s.activeItem} to="/dialogs">Dialogs</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.item} activeClassName={s.activeItem} to="/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.item} activeClassName={s.activeItem} to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.item} activeClassName={s.activeItem} to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.item} activeClassName={s.activeItem} to="settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.sitebar}>
                <Sitebar store={props.store} />
            </div>
        </div>
    )
}

export default Menu;