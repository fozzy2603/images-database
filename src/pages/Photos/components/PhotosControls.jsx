import React from 'react';
import {
  FileIcon,
  FileDirectoryIcon,
  TrashIcon,
  RepoPushIcon,
} from '@primer/octicons-react';

const PhotosControls = () => {
  return (
    <ul className="photos-controls">
      <li>
        <button className="btn">
          <span className="hint">Upload</span>
          <RepoPushIcon />
        </button>
      </li>
      <li>
        <button className="btn">
          <span className="hint">Some text here</span>
          <FileIcon />
        </button>
      </li>
      <li>
        <button className="btn">
          <span className="hint">Create folder</span>
          <FileDirectoryIcon />
        </button>
      </li>
      <li>
        <button className="btn">
          <span className="hint">Remove</span>
          <TrashIcon />
        </button>
      </li>
    </ul>
  );
};

export default PhotosControls;
