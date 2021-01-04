import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  background: ${shade(0.1, '#312e38')};
  opacity: 0.9;
  display: flex;

  #displayOff {
    display: none;
  }

  #displayOn {
    position: fixed;
    height: 100vh;
    width: 400px;
  }

  #displayZIndexNone {
    z-index: 1;
  }

  #displayZIndex1 {
    z-index: 1;
  }

  @media (max-width: 320px) {
    #displayOn {
      margin-top: 7.1rem;
    }
  }

  @media (min-width: 321px) {
    #displayOn {
      margin-top: 7.7rem;
    }
  }

  @media (min-width: 376px) {
    #displayOn {
      margin-top: 8.1rem;
    }
  }

  @media (min-width: 401px) {
    #displayOn {
      margin-top: 8.5rem;
    }
  }

  @media (min-width: 454px) {
    #displayOn {
      margin-top: 5.7rem;
    }
  }

  @media (min-width: 471px) {
    #displayOn {
      margin-top: 9.2rem;
    }
  }

  @media (min-width: 491px) {
    #displayOn {
      margin-top: 5.9rem;
    }
  }

  @media (min-width: 571px) {
    #displayOn {
      margin-top: 6rem;
    }
  }

  @media (min-width: 571px) {
    #displayOn {
      margin-top: 6.2rem;
    }
  }

  @media (min-width: 769px) {
    #displayOn {
      margin-top: 6.5rem;
    }
  }
`;

export const Icon = styled.button`
  background: transparent;
  border: 0;
  margin-top: 2.6rem;
  color: #fafafa;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }

  @media (max-width: 320px) {
    margin-left: 1rem;

    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  @media (min-width: 321px) {
    margin-left: 1rem;

    svg {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (min-width: 401px) {
    svg {
      width: 3.1rem;
      height: 3.1rem;
    }
  }

  @media (min-width: 471px) {
    svg {
      width: 3.3rem;
      height: 3.3rem;
    }
  }

  @media (min-width: 571px) {
    svg {
      width: 3.4rem;
      height: 3.4rem;
    }
  }

  @media (min-width: 671px) {
    svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  }

  @media (min-width: 769px) {
    svg {
      width: 3.8rem;
      height: 3.8rem;
    }
  }

  @media (min-width: 1025px) {
    margin-left: 8.5rem;
  }
`;

export const Title = styled.h1`
  flex: 1;
  text-align: center;
  text-shadow: 0 2px 2px ${shade(0.2, '#ff9000')};
  margin-top: 2.3rem;

  @media (max-width: 320px) {
    font-size: 1.8rem;
  }

  @media (min-width: 321px) {
    font-size: 2.1rem;
  }

  @media (min-width: 376px) {
    font-size: 2.2rem;
  }

  @media (min-width: 401px) {
    font-size: 2.4rem;
  }

  @media (min-width: 471px) {
    font-size: 2.6rem;
  }

  @media (min-width: 571px) {
    font-size: 2.8rem;
  }

  @media (min-width: 671px) {
    font-size: 3rem;
  }

  @media (min-width: 769px) {
    font-size: 3.2rem;
  }
`;

export const Content = styled.div`
  padding-top: 50px;
  background: ${shade(0.1, '#312e38')};

  .content {
    & + div {
      margin-top: 3rem;
    }
  }

  .title {
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: 0;
      color: #fafafa;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }

    svg {
      width: 1.9rem;
      height: 1.9rem;
      margin-right: 1.5rem;
    }

    h2 {
      font-size: 2.4rem;
    }
  }

  .list {
    display: none;
  }

  @media (max-width: 1024px) {
    padding-left: 20px;
  }

  @media (min-width: 1025px) {
    padding-left: 85px;
  }
`;

export const ControlPanel = styled.div`
  a {
    display: flex;
    align-items: center;
    color: #fafafa;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.8rem;
    }
  }
`;

export const Lists = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 30px;

    a {
      display: flex;
      align-items: center;
      color: #fafafa;
      text-decoration: none;
      font-size: 2rem;
      transition: color 0.2s;

      & + a {
        margin-top: 0.8rem;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }

      svg {
        width: 2rem;
        height: 2rem;
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Actions = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 30px;

    a {
      display: flex;
      align-items: center;
      color: #fafafa;
      text-decoration: none;
      font-size: 2rem;
      transition: color 0.2s;

      & + a {
        margin-top: 0.8rem;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }

      svg {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Services = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 30px;

    a {
      display: flex;
      align-items: center;
      color: #fafafa;
      text-decoration: none;
      font-size: 2rem;
      transition: color 0.2s;

      & + a {
        margin-top: 0.8rem;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }

      svg {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.8rem;
      }
    }
  }
`;
