import React from 'react';
import './VideoGallery.css';

export default function VideoGallery() {
    function backOneVideo() {
        const currentVideo = document.querySelector('.vid-gallery--current');

        if (videos.indexOf(currentVideo.src) == 0) {
            currentVideo.src = videos[videos.length - 1];
        } else {
            currentVideo.src = videos[videos.indexOf(currentVideo.src) - 1];
        }
    }

    function forwardOneVideo() {
        const currentVideo = document.querySelector('.vid-gallery--current');
        
        if (videos.indexOf(currentVideo.src) == videos.length - 1) {
            currentVideo.src = videos[0];
        } else {
            currentVideo.src = videos[videos.indexOf(currentVideo.src) + 1];
        }
    }
    
    const videos = [
        'https://www.youtube.com/embed/zTncAopESjs',
        'https://www.youtube.com/embed/FqXi2SRSG4o',
        'https://www.youtube.com/embed/hu6i5aKdKfs',
        'https://www.youtube.com/embed/Po_sLxV61bE'
    ]

    return (
        <div className="vid-gallery">
            <h2>Video Gallery</h2>
            <div className="vid-gallery--nav">
                <img onClick={backOneVideo} className="desktop-arrow left-arrow arrow" src={require("../images/left-arrow.png")} alt="" />
                <iframe className="vid-gallery--current" width="355" height="200" src="https://www.youtube.com/embed/zTncAopESjs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <img onClick={forwardOneVideo} className="desktop-arrow right-arrow arrow" src={require("../images/right-arrow.png")} alt="" />
                <div className="vid-gallery--nav-arrows">
                    <img onClick={backOneVideo} className="mobile-arrow left-arrow arrow" src={require("../images/left-arrow.png")} alt="" />
                    <img onClick={forwardOneVideo} className="mobile-arrow right-arrow arrow" src={require("../images/right-arrow.png")} alt="" />
                </div>
            </div>
        </div>
    );
}