import React from 'react';
import UserInfo from './components/UserInfo';
import SearchForm from './components/SearchForm';
import PhotosContent from './components/PhotosContent'

const Photos = () => {
  return (
    <>
      <div className="row justify-content-between align-items-center mb-4">
        <div className="col-sm-6">
          <SearchForm />
        </div>
        <div className="col-sm-4">
          <UserInfo />
        </div>
      </div>
      <h1 className="mb-4 text-dark">Photos</h1>
      <PhotosContent />
    </>
  );
};

export default Photos;
