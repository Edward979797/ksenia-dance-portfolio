import React from 'react';
import './Header.css';

export default function Header() {
    function openNav() {
        document.querySelector('.sidenav').style.width = '250px';
    }

    function revealSocial() {
        document.querySelector('#header--social-link').style.display = 'none';

        document.querySelector('.header--social-icons').style.display = 'flex';
    }

    return (
        <div className="header">
                <div className="header--logo"><a href="/">Ksenia Druzhinina</a></div>
                <div className="header--menu">
                    <li><a href="/dance">Dancer</a></li>
                    <li>Choreographer</li>
                    <li>Actress</li>
                    <li>Model</li>
                    <li id="header--social-link" onMouseOver={revealSocial}>Social</li>
                    <li className="header--social-icons">
                        <img id="youtube-icon" src={require('../images/youtube.png')} />
                        <img id="instagram-icon" src={require('../images/instagram.png')} />
                        <img id="tiktok-icon" src={require('../images/tiktok.png')} />
                    </li>
                </div>
                <div className="header--button">
                    <img onClick={openNav} src={require("../images/menu-icon.png")}/>
                </div>
            </div>
    );
}