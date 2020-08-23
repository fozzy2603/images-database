import React from 'react'
import PhotosGridItem from './PhotosGridItem';

const PhotosGrid = ({ photos }) => {
    if(!photos.length) return <p>No photos</p>
    return <div className="photos-grid">
    {photos.map(photo => <PhotosGridItem key={photo.id} photo={photo}/>)}
</div>
}

export default PhotosGrid
