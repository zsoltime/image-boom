import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Download from './Icons/Download';
import Heart from './Icons/Heart';
import Star from './Icons/Star';
import User from './Icons/User';
import Views from './Icons/Views';

const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex: 1 1 15rem;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const ImageWrapper = styled.div`
  height: 12rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    transition: transform ${({ theme }) => theme.transitionEase},
      filter ${({ theme }) => theme.transitionEase};
    width: 100%;
  }

  &:hover img {
    filter: blur(0.1px) brightness(0.75);
    transform: scale(1.1);
  }
`;

const Meta = styled.footer`
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.825rem;
    justify-content: space-between;

    &:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;

const Avatar = styled.img.attrs({ alt: '' })`
  border-radius: 50%;
  height: 24px;
  margin-right: 0.5rem;
  width: 24px;
`;

const WithIcon = styled.span`
  align-items: center;
  display: flex;
  margin-right: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const StarWithMargin = styled(Star)`
  margin-left: 0.25rem;
  margin-right: 0.75rem;
`;

const Image = ({
  downloads,
  favorites,
  likes,
  user,
  userImageURL,
  views,
  webformatURL,
}) => (
  <Card>
    <ImageWrapper>
      <img src={webformatURL} alt="" />
    </ImageWrapper>
    <Meta>
      <div>
        <WithIcon>
          {userImageURL ? <Avatar src={userImageURL} /> : <User />}{' '}
          {user}
        </WithIcon>
        <WithIcon>
          <Views size="24px" /> {views}
        </WithIcon>
      </div>
      <div>
        <WithIcon>
          <StarWithMargin /> {favorites}
        </WithIcon>
        <WithIcon>
          <Heart /> {likes}
        </WithIcon>
        <WithIcon>
          <Download /> {downloads}
        </WithIcon>
      </div>
    </Meta>
  </Card>
);

Image.defaultProps = {
  userImageURL: null,
};

Image.propTypes = {
  downloads: PropTypes.number.isRequired,
  favorites: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  userImageURL: PropTypes.string,
  views: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default Image;
