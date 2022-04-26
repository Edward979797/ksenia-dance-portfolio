import React from 'react';
import './PageText.css';
import contentText from '../contentText';

export default function PageText(props) {

    const textToDisplay = contentText.filter(text => text.category === props.categoryName);

    return (
        <div className="pagetext">
            <div className="pagetext--highlights">
                <h3>Highlights</h3>
                <div className="highlights-timeline">
                    <div className="highlights-container container-left">
                        <div className="highlights-content">
                            <h2>{textToDisplay[0].highlights[0].header}</h2>
                            <p>{textToDisplay[0].highlights[0].text}</p>
                        </div>
                    </div>
                    <div className="highlights-container container-right">
                        <div className="highlights-content">
                            <h2>{textToDisplay[0].highlights[1].header}</h2>
                            <p>{textToDisplay[0].highlights[1].text}</p>
                        </div>
                    </div>
                    <div className="highlights-container container-left">
                        <div className="highlights-content">
                            <h2>{textToDisplay[0].highlights[2].header}</h2>
                            <p>{textToDisplay[0].highlights[2].text}</p>
                        </div>
                    </div>
                    <div className="highlights-container container-right">
                        <div className="highlights-content">
                            <h2>{textToDisplay[0].highlights[3].header}</h2>
                            <p>{textToDisplay[0].highlights[3].text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagetext--experience">
                <h3>Experience</h3>
                <p>{textToDisplay[0].experience}</p>
            </div>
        </div>
    );
}