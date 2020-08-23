import React, { useState, useEffect } from 'react';
import { PhotosContext } from './photosContext';
import images from '../.././db/index.json';
import {compareValues} from '../../helpers/compareValues';

export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalSize, setTotalSize] = useState(null);

  useEffect(() => {
    const fetchPhotos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(images), 3000);
      });
    };

    fetchPhotos()
      .then(data => {
        setPhotos(data);
        setTotalSize(data.reduce((acc, item) => acc += item.size, 0));
        setLoading(false);
      })
      .catch( error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSort = sortField => {
    const sortedPhotos = photos.sort(compareValues(sortField))
    setPhotos([...sortedPhotos])
  }

  return (
    <PhotosContext.Provider value={{ photos, loading, handleSort, totalSize }}>
      {children}
    </PhotosContext.Provider>
  );
};
