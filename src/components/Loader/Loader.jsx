import React from 'react';

const Loader = () => {
  return (
    <div className="text-center mt-5">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
