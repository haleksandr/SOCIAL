import React from 'react';
import s from './Sitebar.module.css';
import SitebarElement from './SitebarElement/SitebarElement';

const Sitebar = (props) => {
    // debugger;

    let sitebarElement = props.sitebar.map((el) => {
        return <SitebarElement id={el.id} name={el.name}/>
    });

    return (
        <div>
            <div>
                <p>{sitebarElement}</p>
            </div>
        </div>
    )
}

export default Sitebar;