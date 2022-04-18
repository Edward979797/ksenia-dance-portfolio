import React from 'react';
import './Sidenav.css';

export default function Sidenav() {
    function closeNav() {
        document.querySelector('.sidenav').style.width = '0';
    }

    return (
        <div id="sidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="#">Dancer</a>
            <a href="#">Choreographer</a>
            <a href="#">Actress</a>
            <a href="#">Model</a>
        </div>
    );
}