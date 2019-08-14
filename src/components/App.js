import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ImageGrid from './ImageGrid';
import Message from './Message';
import SearchBox from './SearchBox';
import Wrapper from './Wrapper';

import initialImages from '../initialImages';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = new URL('https://pixabay.com/api/');
API_URL.searchParams.set('key', API_KEY);
API_URL.searchParams.set('image_photo', 'photo');

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidthSmall};
`;

const LoadMoreButton = styled.button`
  background-color: ${({ theme }) => theme.lightGrey};
  margin: 0 auto 1rem;
  max-width: ${({ theme }) => theme.maxWidthSmall};
  width: 100%;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6rem);
`;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [images, setImages] = useState(initialImages);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(API_URL.href);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    API_URL.searchParams.set('q', query);
    setUrl(API_URL.href);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    fetchImages();
  };

  const fetchMore = () => {
    setError(null);
    setIsLoading(true);

    API_URL.searchParams.set('page', currentPage + 1);
    setCurrentPage(p => p + 1);

    fetch(API_URL.href)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
      })
      .then(data => {
        setImages(imgs => [...imgs, ...data.hits]);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const fetchImages = () => {
    setError(null);
    // TODO: set url too :P
    setCurrentPage(1);
    setTotal(0);
    setIsLoading(true);

    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
      })
      .then(data => {
        if (data.totalHits === 0) {
          setError(`No results found for search query "${query}"`);
        }
        setImages(data.hits);
        setTotal(data.totalHits);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  return (
    <StyledMain>
      <SearchBox onSubmit={handleSubmit} />
      <Wrapper>
        {isLoading && <div>Loading...</div>}
        {error && <Message error>{error}</Message>}
        {images.length > 0 ? (
          <>
            <ImageGrid images={images} />
            {total > images.length ? (
              <LoadMoreButton onClick={fetchMore}>
                Load more...
              </LoadMoreButton>
            ) : (
              currentPage > 1 && (
                <p>You've reached the end of the list</p>
              )
            )}
          </>
        ) : (
          <Message>Try to use the searchbox above :)</Message>
        )}
      </Wrapper>
    </StyledMain>
  );
}

export default App;
