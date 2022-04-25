import React from 'react';
import Subheader from './Subheader';
import PageText from './PageText';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';

export default function(props) {
    return (
        <div>
            <Subheader categoryName={props.category} />
            <PageText categoryName={props.category} />
            <ImageGallery categoryName={props.category} />
            {props.category === 'dancer' && <VideoGallery categoryName={props.category} />}
        </div>
    );
}