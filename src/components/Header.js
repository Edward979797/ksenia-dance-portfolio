import React from 'react';
import './Header.css';

export default function Header() {
    function openNav() {
        document.querySelector('.sidenav').style.width = '250px';
    }

    return (
        <div className="header">
                <div className="header--logo"><a href="/">Ksenia Druzhinina</a></div>
                <div className="header--menu">
                    <li><a href="/dance">Dancer</a></li>
                    <li>Choreographer</li>
                    <li>Actress</li>
                    <li>Model</li>
                    <li>Social</li>
                </div>
                <div className="header--button">
                    <img onClick={openNav} src={require("../images/menu-icon.png")}/>
                </div>
            </div>
    );
}