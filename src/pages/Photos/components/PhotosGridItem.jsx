import React from 'react'
import { bytesToSize } from '../../../helpers/bytesToSize';

const PhotosGridItem = ({photo: {url, name, size, modifiedDate}}) => (
    <div className="photos-item">
        <div className="photos-item__img" style={{backgroundImage: `url(${url})`}}></div>
        <div className="photos-item__title">{name}</div>
        <div className="photos-item__size">{bytesToSize(size)}</div>
    </div>
)

export default PhotosGridItem
