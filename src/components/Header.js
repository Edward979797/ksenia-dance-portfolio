import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

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
                <div className="header--logo"><Link to="/">Ksenia Druzhinina</Link></div>
                <div className="header--menu">
                    <li><Link to="/dancer">Dancer</Link></li>
                    <li><Link to="/choreo">Choreo</Link></li>
                    <li><Link to="/actress">Actress</Link></li>
                    <li><Link to="/model">Model</Link></li>
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