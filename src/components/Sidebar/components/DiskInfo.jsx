import React, { useContext, useMemo } from 'react';
import { PlusCircleIcon } from '@primer/octicons-react';
import { PhotosContext } from '../../../context/photos/photosContext';
import { bytesToSize } from '../../../helpers/bytesToSize';

const DiskInfo = () => {
  const { totalSize } = useContext(PhotosContext);
  return useMemo(() => {
    if (!totalSize) return null;
    const availableSpaceinBytes = 1073741824; // 1Gb
    const availableSpace = bytesToSize(availableSpaceinBytes);
    const usedSpace = bytesToSize(totalSize);
    const progress = parseFloat(((totalSize / availableSpaceinBytes) * 100).toFixed(2));
    return (
      <div className="disk-info mb-5">
        <div className="d-flex justify-content-between mb-2 align-items-center">
          <strong className="space-info text-light">
            {usedSpace} / {availableSpace}
          </strong>
          <button className="btn btn-link btn-sm">
            <PlusCircleIcon />
          </button>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }, [totalSize]);
};

export default DiskInfo;
