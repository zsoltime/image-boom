import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidthSmall};
`;

const SearchSection = styled.section`
  background-color: ${({ theme }) => theme.black};
  padding: 1rem 0;
`;

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <SearchSection>
      <Wrapper>
        <Form onSubmit={handleSubmit} role="search">
          <input
            type="search"
            aria-label="Search images"
            maxLength="100"
            onChange={e => setQuery(e.target.value)}
            placeholder="e.g. space cats"
            required
            value={query}
          />
          <button type="submit" disabled={query.trim().length === 0}>
            Search
          </button>
        </Form>
      </Wrapper>
    </SearchSection>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
