import React from 'react';
import './FrontImage.css';

export default function FrontImg() {
    return (
        <div className="front-image">
                <img src={require('../images/dance.jpg')} />
        </div>
    );
}