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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis varius ligula id dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam convallis libero et tortor lacinia semper. Aenean sed dui sit amet ex convallis pulvinar quis vel quam. Integer ut lobortis mauris. Curabitur a facilisis libero, eget pharetra ante. Vestibulum nec eleifend orci. Nulla ultrices tristique tortor, eu venenatis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ipsum diam, malesuada id tristique a, accumsan ac lorem. Mauris a bibendum lacus, sed luctus sem. Proin varius, neque eu commodo ultrices, dolor nisl sodales velit, et accumsan ante mi id augue.
                </div>
        </div>
    );
}