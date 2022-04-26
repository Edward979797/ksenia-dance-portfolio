import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about">
                <div className="about--header">
                    About Me
                </div>
                <div className="about--headshot">
                    <img src={require('../images/headshot.jpg')} />
                </div>
                <div className="about--text">
                    Hi! My name is Ksenia Druzhinina and I'm a lifelong lover of dance, theatre, and performance. Alongside
                    my academic background in drama and theatre (York University, Honours BA), my profound passion for international
                    dance backed up by years of tried-and-true experience make me a polyvalent entertainer who feels at home on the
                    stage. I've also dabbled in modelling and taken the lead as choreographer. This portfolio is a record of all of the
                    cool and creative things that I've done so far, so take a look to get an idea of who I am.
                </div>
        </div>
    );
}