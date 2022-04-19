import React from 'react';
import './Subheader.css';

export default function Subheader() {
    return (
        <div className="subheader">
            <div className="subheader--title">
                <h1>DANCE</h1>
            </div>
            <div className="subheader--reel">
                <iframe width="356" height="200" src="https://www.youtube.com/embed/9ooQ_EcV6_A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
}