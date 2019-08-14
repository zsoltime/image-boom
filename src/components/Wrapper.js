import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 1rem;
  width: 100%;
`;

export default Wrapper;
