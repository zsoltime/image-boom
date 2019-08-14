import React, { useState } from 'react';
import styled from 'styled-components';

import ImageGrid from './ImageGrid';
import Message from './Message';
import SearchBox from './SearchBox';
import Wrapper from './Wrapper';

import useImageFetch from '../hooks/useImageFetch';

const LoadMoreButton = styled.button`
  background-color: ${({ theme }) => theme.lightGrey};
  display: block;
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
  const [{ data, error, isLoading }, refetch] = useImageFetch();

  const handleSubmit = keyword => {
    const page = 1;

    refetch({ keyword, page });
    setCurrentPage(page);
  };

  const loadNextPage = () => {
    refetch({ page: currentPage + 1 });
    setCurrentPage(p => p + 1);
  };

  const { hits, totalHits } = data;

  return (
    <StyledMain>
      <SearchBox onSubmit={handleSubmit} />
      <Wrapper>
        {isLoading && <div>Loading...</div>}
        {error && error.message && (
          <Message error>{error.message}</Message>
        )}
        {hits && hits.length > 0 ? (
          <>
            <ImageGrid images={hits} />
            {totalHits > hits.length ? (
              <LoadMoreButton onClick={loadNextPage}>
                Load more...
              </LoadMoreButton>
            ) : (
              currentPage > 1 && (
                <Message>You've reached the end of the list</Message>
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
