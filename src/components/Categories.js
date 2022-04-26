import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

export default function Categories() {
    return (
        <div className="categories">
                <div className="categories--dance" style={{ backgroundImage: `url(${require('../images/category-dance.jpg')})` } }>
                    <Link to="/dancer">Dancing</Link>
                </div>
                <div className="categories--choreo" style={{ backgroundImage: `url(${require('../images/category-choreo.png')})` } }>
                    <Link to="/choreo">Choreography</Link>
                </div>
                <div className="categories--act" style={{ backgroundImage: `url(${require('../images/category-act.JPG')})` } }>
                    <Link to="/actress">Acting</Link>
                </div>
                <div className="categories--model" style={{ backgroundImage: `url(${require('../images/category-model.jpg')})` } }>
                    <Link to="/model">Modelling</Link>
                </div>
        </div>
    );
}