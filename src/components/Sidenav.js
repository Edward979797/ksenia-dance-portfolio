import React from 'react';
import './Sidenav.css';
import { Link } from 'react-router-dom';

export default function Sidenav() {
    function closeNav() {
        document.querySelector('.sidenav').style.width = '0';
    }

    return (
        <div id="sidenav" className="sidenav">
            <a className="closebtn" onClick={closeNav}>&times;</a>
            <Link to="/">Home</Link>
            <Link to="/dancer">Dancer</Link>
            <Link to="/choreo">Choreographer</Link>
            <Link to="/actress">Actress</Link>
            <Link to="/model">Model</Link>
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