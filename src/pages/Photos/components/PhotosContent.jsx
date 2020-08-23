import React, { useContext } from 'react';
import { PhotosContext } from '../../../context/photos/photosContext';
import Loader from '../../../components/Loader';
import PhotosControls from './PhotosControls';
import SortControls from './SortControls';
import PhotosGrid from './PhotosGrid';

const PhotosContent = () => {
  const { loading, photos } = useContext(PhotosContext);
  if(loading) return <Loader />
  return(
    <>
      <div className="d-flex justify-content-between">
        <PhotosControls />
        <SortControls />
      </div>
      <hr />
      <PhotosGrid photos={photos} />
    </>
  );
};

export default PhotosContent;
