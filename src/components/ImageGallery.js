import React from 'react';
import './ImageGallery.css';
import imageInfo from '../imageInfo';

export default function ImageGallery(props) {
    // props.categoryName should = category name of images I want to use
    const imagesToUse = imageInfo.filter(image => image.category === props.categoryName);
    let imagesForCol1 = [];
    let imagesForCol2 = [];

    imagesToUse.forEach(image => {
        if (imagesToUse.indexOf(image) % 2 == 0) {
            imagesForCol1.push(image);
        } else {
            imagesForCol2.push(image);
        }
    });

    
    function populateCol1() {

        return imagesForCol1.map(image => {
            return (
                <img loading="lazy" className="img-gallery--img" src={require(`../images/${image.name}`)} alt="" />
            );
        })
    }

    function populateCol2() {

        return imagesForCol2.map(image => {
            return (
                <img loading="lazy" className="img-gallery--img" src={require(`../images/${image.name}`)} alt="" />
            );
        })
    }


    return (
        <div className="img-gallery">
            <h2>Image Gallery</h2>
            <div className="img-gallery--imgs">
                <div className="img-gallery--col-1">
                    {populateCol1()}
                </div>
                <div className="img-gallery--col-2">
                    {populateCol2()}
                </div>
             </div>
        </div>
    );
}