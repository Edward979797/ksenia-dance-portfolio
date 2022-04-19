import React from 'react';
import Subheader from './Subheader';
import PageText from './PageText';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';

export default function() {
    return (
        <div>
            <Subheader />
            <PageText />
            <ImageGallery />
            <VideoGallery />
        </div>
    );
}