import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 2.8125em;
  background-color: var(--white);
  > input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
`;
