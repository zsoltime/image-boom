import styled from 'styled-components';

const Message = styled.div`
  background-color: ${({ error, theme }) =>
    error ? theme.lightRed : theme.lightBlue};
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;
  padding: 1rem;
  text-align: center;
  width: 80%;
`;

export default Message;
