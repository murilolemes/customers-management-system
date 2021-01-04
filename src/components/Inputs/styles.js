import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    border: 1px solid #ff9000;
    border-radius: 5px;
    padding: 1rem;

    input {
      width: 100%;
      border: 0;
      background: transparent;
      color: #ff9000;
    }

    select {
      width: 100%;
      height: 2.4rem;
      font-size: 1.6rem;
      border: 0;
      background: transparent;
      color: #ff9000;
    }
  }

  & + div {
    margin-top: 1.5rem;
  }
`;
