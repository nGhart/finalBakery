import React from 'react';
import gallery from './GalleryData';

function GalleryItem() {
  return (
    <div className="galleryContainer">
      {gallery.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="Menu item" style={{ width: '100%' }} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryItem;
