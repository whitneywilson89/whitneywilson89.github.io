import React, { useState } from 'react';
import './Gallery.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import photo1 from './../images/IMG_050.jpg';
import photo2 from './../images/IMG_051.jpg';
import photo3 from './../images/IMG_052.jpg';
import photo4 from './../images/IMG_053.jpg';
import photo5 from './../images/IMG_054.jpg';
import photo6 from './../images/IMG_055.jpg';
import photo7 from './../images/IMG_056.jpg';
import photo8 from './../images/IMG_057.jpg';
import photo9 from './../images/IMG_058.jpg';
import photo10 from './../images/IMG_059.jpg';
import photo11 from './../images/IMG_060.jpg';
import photo12 from './../images/IMG_061.jpg';
import photo13 from './../images/IMG_062.jpg';
import photo14 from './../images/IMG_063.jpg';
import photo15 from './../images/IMG_064.jpg';
import photo16 from './../images/IMG_065.jpg';
import photo17 from './../images/IMG_066.jpg';
import photo18 from './../images/IMG_067.jpg';
import photo19 from './../images/IMG_068.jpg';
import photo20 from './../images/IMG_069.jpg';
import photo21 from './../images/IMG_070.jpg';
import photo22 from './../images/IMG_071.jpg';
import photo23 from './../images/IMG_072.jpg';
import photo24 from './../images/IMG_073.jpg';
import photo25 from './../images/IMG_074.jpg';
import photo26 from './../images/IMG_075.jpg';
import photo27 from './../images/IMG_076.jpg';
import photo28 from './../images/IMG_077.jpg';
import photo29 from './../images/IMG_078.jpg';
import photo30 from './../images/IMG_079.jpg';
import photo31 from './../images/IMG_080.jpg';
import photo32 from './../images/IMG_081.jpg';
import photo33 from './../images/IMG_082.jpg';
import photo34 from './../images/IMG_083.jpg';
import HeaderLine from '../components/HeaderLine';

const images = [
  photo1, photo5, photo8, photo12, photo15, photo18, photo21,
  photo28, photo31, photo34, photo2, photo6, photo9, photo11,
  photo13, photo16, photo19, photo22, photo24, photo26, photo29,
  photo32, photo3, photo4, photo7, photo10, photo14, photo17,
  photo20, photo23, photo25, photo27, photo30, photo33
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="photo-gallery">
      <section className="photo-gallery-section">
        <HeaderLine header="Photo Gallery" />
        <div className="photo-gallery-body">
          {images.map((image, index) => (
            <div className="photo-column" key={index}>
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="gallery-image"
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onImageLoad={() => {
            window.dispatchEvent(new Event('resize'));
          }}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={`${photoIndex + 1} / ${images.length}`}
        />
      )}
    </div>
  );
};

export default Gallery;
