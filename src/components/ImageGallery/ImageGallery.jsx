import PropTypes from 'prop-types';

import { React } from 'react';
import { ImageGalleryList } from './ImageGallery.style';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onOpen }) => {
  return (
    <ImageGalleryList>
      {images.length > 0 &&
        images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <GalleryItem
              key={id}
              img={webformatURL}
              tag={tags}
              largeIMG={largeImageURL}
              onOpen={onOpen}
            />
          );
        })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      onOpen: PropTypes.func,
    })
  ),
};
