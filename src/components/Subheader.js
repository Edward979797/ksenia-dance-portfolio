import React from 'react';
import './Subheader.css';

export default function Subheader(props) {
    
    function displayReel() {
        switch (props.categoryName) {
            case 'dancer':
                return <iframe width="356" height="200" src="https://www.youtube.com/embed/9ooQ_EcV6_A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
            case 'actress':
                return <img src={require('../images/subheader-act.jpg')} />;
            case 'choreo':
                return <iframe width="356" height="200" src="https://www.youtube.com/embed/Po_sLxV61bE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
            case 'model':
                return <img src={require('../images/subheader-model.jpg')} />;
        }
    }

    return (
        <div className="subheader">
            <div className="subheader--title">
                <h1>{props.categoryName.toUpperCase()}</h1>
            </div>
            <div className="subheader--reel">
                {displayReel()}
            </div>
        </div>
    );
}