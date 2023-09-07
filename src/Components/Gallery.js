import React, { useState } from 'react';
import gallery from './GalleryData';
import Modal from 'react-bootstrap/Modal';

function Gallery() {
  const [modalImage, setModalImage] = useState('');
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const handleModalImage = (image) => {
    setModalImage(image);
    setShow(true);
  };

  return (
    <>
      <div className="gallerySection title">
        <h1>Gallery</h1>
        <div className="galleryContainer">
          {gallery.map((item) => {
            return (
              <div
                key={item.id}
                className="pics"
                onClick={() => {
                  handleModalImage(item.image);
                }}
              >
                <img
                  src={item.image}
                  alt="Menu item"
                  className="galleryImages"
                  style={{ width: '100%' }}
                  onClick={() => handleShow(true)}
                />
                <p className="galleryCredit">Photo by {item.artist} </p>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        style={{ backgroundColor: 'transparent' }}
      >
        <Modal.Header
          style={{ backgroundColor: '#9987a5', border: 'none' }}
          closeButton
        ></Modal.Header>
        <Modal.Body className="modalBody" style={{ border: 'none' }}>
          <img src={modalImage} alt="Menu item" className="modalImage" />
        </Modal.Body>
        <Modal.Footer
          className="modalFooter"
          style={{ backgroundColor: '#9987a5', border: 'none' }}
        ></Modal.Footer>
      </Modal>
    </>
  );
}

export default Gallery;
