import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from './Image';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.5rem -0.5rem;
`;

const ImageGrid = ({ images }) => (
  <Grid>
    {images.map(image => (
      <Image key={image.id} {...image} />
    ))}
  </Grid>
);

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      downloads: PropTypes.number.isRequired,
      favorites: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      userImageURL: PropTypes.string,
      views: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGrid;
