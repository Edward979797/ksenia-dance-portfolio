import React from 'react';
import './Sidenav.css';

export default function Sidenav() {
    function closeNav() {
        document.querySelector('.sidenav').style.width = '0';
    }

    return (
        <div id="sidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="/">Home</a>
            <a href="/dance">Dancer</a>
            <a href="#">Choreographer</a>
            <a href="#">Actress</a>
            <a href="#">Model</a>
            <div className="sidenav--social-icons">
                <a>
                    <img id="youtube-icon" src={require('../images/youtube.png')} />
                </a>
                <a>
                    <img id="instagram-icon" src={require('../images/instagram.png')} />
                </a>
                <a>
                    <img id="tiktok-icon" src={require('../images/tiktok.png')} />
                </a>
            </div>
        </div>
    );
}