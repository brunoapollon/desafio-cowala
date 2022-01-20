import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 28.75em;
  background: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > form {
    width: 33.75em;
    label {
      font-size: 1.125em;
      font-weight: bold;
    }
    section {
      display: flex;
      align-items: center;
      margin-top: 1.25em;
      div {
        width: 100%;
      }
      div:first-child {
        margin-right: 2em;
      }
      button {
        width: 11.25em;
        height: 3.5em;
        background: var(--blue-green);
        border: none;
        align-self: flex-end;
      }
    }
    > footer {
      width: 100%;
      margin-top: 3.875em;
      display: flex;
      justify-content: center;
      align-items: center;
      > button {
        width: 8.75em;
        height: 2.8125em;
        background: var(--dark-blue);
        border: none;
        color: var(--white);
        margin-right: 2.0625em;
      }
    }
  }
`;
