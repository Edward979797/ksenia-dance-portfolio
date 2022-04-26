import React from 'react';
import './Sidenav.css';

export default function Sidenav() {
    function closeNav() {
        document.querySelector('.sidenav').style.width = '0';
    }

    return (
        <div id="sidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="/">Home</a>
            <a href="/dancer">Dancer</a>
            <a href="/choreo">Choreographer</a>
            <a href="/actress">Actress</a>
            <a href="/model">Model</a>
            <div className="sidenav--social-icons">
                <a href="https://www.youtube.com/channel/UC8LOA0SUjhGPw49QtlN3AYQ/videos">
                    <img id="youtube-icon" src={require('../images/youtube.png')} />
                </a>
                <a href="https://www.instagram.com/ksushik__/">
                    <img id="instagram-icon" src={require('../images/instagram.png')} />
                </a>
                <a href="https://www.tiktok.com/@__ksushik?lang=en">
                    <img id="tiktok-icon" src={require('../images/tiktok.png')} />
                </a>
            </div>
        </div>
    );
}