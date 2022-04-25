import React from 'react';
import './Categories.css';

export default function Categories() {
    return (
        <div className="categories">
                <div className="categories--dance" style={{ backgroundImage: `url(${require('../images/category-dance.jpg')})` } }>
                    <a href="/dancer">Dancing</a>
                </div>
                <div className="categories--choreo" style={{ backgroundImage: `url(${require('../images/category-choreo.png')})` } }>
                    <a href="/choreo">Choreography</a>
                </div>
                <div className="categories--act" style={{ backgroundImage: `url(${require('../images/category-act.JPG')})` } }>
                    <a href="/actress">Acting</a>
                </div>
                <div className="categories--model" style={{ backgroundImage: `url(${require('../images/category-model.jpg')})` } }>
                    <a href="/model">Modelling</a>
                </div>
        </div>
    );
}