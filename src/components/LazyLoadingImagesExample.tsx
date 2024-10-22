import React from 'react';

const LazyLoadingImagesExample: React.FC = () => {
  return (
    <div>
      <h2>Lazy Loading Images Example</h2>
      <img src="https://picsum.photos/id/1/2000/3000" height={250} width="auto" alt="First Image" loading="lazy" />
      <img src="https://picsum.photos/id/2/2000/3000" height={250} width="auto" alt="Second Image" loading="lazy" />
      <img src="https://picsum.photos/id/3/2000/3000" height={250} width="auto" alt="Third Image" loading="lazy" />
    </div>
  );
};

export default LazyLoadingImagesExample;
