import React from 'react';
import './ImageGallery.css';

export default function ImageGallery() {
    return (
        <div className="img-gallery">
            <h2>Image Gallery</h2>
            <div className="img-gallery--imgs">
                <div className="img-gallery--col-1">
                    <img loading="lazy" className="img-gallery--img" src={require("../images/01.jpg")} alt="" />
                    <img loading="lazy" className="img-gallery--img" src={require("../images/04.jpg")} alt="" />
                    <img loading="lazy" className="img-gallery--img" src={require("../images/02.jpeg")} alt="" />
                </div>
                <div className="img-gallery--col-2">
                    <img loading="lazy" className="img-gallery--img" src={require("../images/05.jpg")} alt="" />
                    <img loading="lazy" className="img-gallery--img" src={require("../images/03.jpg")} alt="" />
                    <img loading="lazy" className="img-gallery--img" src={require("../images/06.jpg")} alt="" />
                    <img loading="lazy" className="img-gallery--img" src={require("../images/07.jpeg")} alt="" />
                </div>
             </div>
        </div>
    );
}