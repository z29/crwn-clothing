import React from 'react';

import './menu-item.styles.scss'

//same as doing title = props.title
const MenuItem = ({title, imageUrl, size}) => (
    //using js to dynamically change our items
    <div className = {`${size} menu-item`}>
        <div className = 'background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className = "content">
            <h1 className = "title"> {title.toUpperCase()}</h1>
            <span className = "subtitle"> SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;