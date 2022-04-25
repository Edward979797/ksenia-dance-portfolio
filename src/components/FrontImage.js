import React from 'react';
import './FrontImage.css';

export default function FrontImg() {
    return (
        <div className="front-image">
                <img id="first-image" src={require('../images/front-1.jpg')} />
                <img id="second-image" src={require('../images/front-2.jpg')} />
                <img id="third-image" src={require('../images/front-3.jpg')} />
        </div>
    );
}