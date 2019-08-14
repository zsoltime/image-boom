import React from 'react';
import styled from 'styled-components';

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

export default ImageGrid;
