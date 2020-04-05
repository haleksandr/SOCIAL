import React from 'react';
import './MyProfile.css';

const MyProfile = () => {
    return (
        <div>
            <div className="app-myProfile">
                <img src="https://www.spletnik.ru/img/__post/4d/4d788b39944f80eab14054263dc58970_146." alt=""/>
                <div className="about-me">
                    <h3>Aleksandr H.</h3>
                    <p>Date of Birth: 30 september</p>
                    <p>City: Kyiv</p>
                    <p>Technologies: HTML, CSS, JS, REACT</p>
                    <p>WebSite: holoven.info</p>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;