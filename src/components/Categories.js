import React from 'react';
import './Categories.css';

export default function Categories() {
    return (
        <div className="categories">
                <div className="categories--dance" style={{ backgroundImage: `url(${require('../images/dancing.jpg')})` } }>
                    Dancing
                </div>
                <div className="categories--choreo" style={{ backgroundImage: `url(${require('../images/choreo.jpg')})` } }>
                    Choreography
                </div>
                <div className="categories--act" style={{ backgroundImage: `url(${require('../images/acting.jpg')})` } }>
                    Acting
                </div>
                <div className="categories--model" style={{ backgroundImage: `url(${require('../images/modelling.jpg')})` } }>
                    Modelling
                </div>
        </div>
    );
}