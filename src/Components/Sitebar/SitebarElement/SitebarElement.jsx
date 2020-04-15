import React from 'react';
import s from './SitebarElement.module.css';

const SitebarElement = (props) => {
    return (
        <div className={s.sitebarElement}>
            <p className={s.sizeName}>{props.name}</p>
        </div>
    )
}

export default SitebarElement;