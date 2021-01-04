import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
  }

  a {
    color: #fafafa;
    text-decoration: none;
    margin-top: 50px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 1rem;
    }
  }
`;

export const Form = styled.form`
  text-align: center;
  width: 100%;

  button {
    height: 40px;
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    border: none;
    background: #ff9000;
    color: #312e38;
    font-size: 1.6rem;
    font-weight: 500;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const DivInput = styled.div`
  width: 100%;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ff9000;
    border-radius: 10px;
    padding: 16px;

    input {
      flex: 1;
      border: 0;
      background: transparent;
      color: #ff9000;
    }

    & + div {
      margin-top: 8px;
    }

    svg {
      margin-right: 16px;
    }
  }
`;
