import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h2 {
    margin-bottom: 3rem;
  }

  @media (max-width: 320px) {
    padding-top: 2.7rem;
  }

  @media (min-width: 321px) {
    padding-top: 2.7rem;
  }

  @media (min-width: 401px) {
    padding-top: 2.4rem;
  }

  @media (min-width: 471px) {
    padding-top: 2.5rem;
  }

  @media (min-width: 571px) {
    padding-top: 2.3rem;
  }

  @media (min-width: 671px) {
    padding-top: 2.2rem;
  }

  @media (min-width: 769px) {
    padding-top: 2rem;
  }

  @media (min-width: 1025px) {
    max-width: 1440px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  div {
    display: flex;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        margin-top: 1rem;
      }

      div {
        margin-top: 0.5rem;
        border: 1px solid #ff9000;
        border-radius: 5px;
        padding: 1rem;

        input {
          width: 100%;
          border: 0;
          height: 2.4rem;
          background: transparent;
          color: #ff9000;
          font-size: 1.6rem;
        }

        select {
          width: 100%;
          height: 2.4rem;
          border: 0;
          background: transparent;
          color: #ff9000;
          font-size: 1.6rem;
        }
      }
    }
  }

  @media (max-width: 550px) {
    width: 100%;

    div {
      flex-direction: column;

      div {
        & + div {
          margin-left: 0;
        }
      }
    }
  }

  @media (min-width: 551px) {
    width: 500px;

    div {
      flex-direction: column;

      div {
        & + div {
          margin-left: 0;
        }
      }
    }
  }

  @media (min-width: 1025px) {
    width: 1000px;

    div {
      flex-direction: row;

      div {
        & + div {
          margin-left: 1.5rem;
        }
      }
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  #submit {
    width: 100px;
    height: 4.7rem;
    margin-top: 2.5rem;
    border-radius: 5px;
    border: none;
    background: #ff9000;
    color: #312e38;
    font-size: 1.6rem;
    font-weight: 500;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  #cancel {
    width: 100px;
    height: 4.7rem;
    margin-top: 1.5rem;
    border-radius: 5px;
    border: none;
    background: #ff0000;
    color: #312e38;
    font-size: 1.6rem;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #fafafa;
      background: ${shade(0.2, '#ff0000')};
    }
  }

  @media (max-width: 425px) {
    #submit {
      width: 100%;
    }
  }
`;
