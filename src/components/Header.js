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
                    <li><a href="/dancer">Dancer</a></li>
                    <li><a href="/choreo">Choreo</a></li>
                    <li><a href="/actress">Actress</a></li>
                    <li><a href="/model">Model</a></li>
                    <li id="header--social-link" onMouseOver={revealSocial}>Social</li>
                    <li className="header--social-icons">
                        <a href="https://www.youtube.com/channel/UC8LOA0SUjhGPw49QtlN3AYQ/videos"><img id="youtube-icon" src={require('../images/youtube.png')} /></a>
                        <a href="https://www.instagram.com/ksushik__/"><img id="instagram-icon" src={require('../images/instagram.png')} /></a>
                        <a href="https://www.tiktok.com/@__ksushik?lang=en"><img id="tiktok-icon" src={require('../images/tiktok.png')} /></a>
                    </li>
                </div>
                <div className="header--button">
                    <img onClick={openNav} src={require("../images/menu-icon.png")}/>
                </div>
            </div>
    );
}