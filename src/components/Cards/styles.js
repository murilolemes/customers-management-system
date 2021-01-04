import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    width: 100%;

    div {
      border-radius: 10px;
      box-shadow: 0 0 3px ${shade(0.2, '#ff9000')};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: ${shade(0.1, '#fafafa')};
      color: #312e38;
      transition: background 0.5s;

      h2 {
        margin: 10px 0 20px;
      }

      p {
        flex: 1;
        color: ${shade(0.2, '#ff9000')};
        font-weight: 500;
      }

      &:hover {
        background: transparent;
        box-shadow: 0 0 5px ${shade(0.2, '#ff9000')};
        h2 {
          color: #fafafa;
        }
      }
    }
  }

  #cards {
    width: 250px;
    height: 120px;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    margin-top: 1rem;

    div {
      justify-content: space-between;

      & + div {
        margin-top: 1.5rem;
      }

      div {
        & + div {
          margin-top: 0;
        }

        h2 {
          font-size: 1.4rem;
          margin-top: 1rem;
          margin-bottom: 1.3rem;
        }

        p {
          font-size: 1.7rem;
        }
      }
    }

    #cards {
      width: 140px;
      height: 80px;
    }
  }

  @media (min-width: 321px) {
    flex-direction: column;
    margin-top: 1rem;

    div {
      justify-content: space-between;

      & + div {
        margin-top: 1.5rem;
      }

      div {
        & + div {
          margin-top: 0;
        }

        h2 {
          font-size: 1.4rem;
          margin-top: 1rem;
          margin-bottom: 1.3rem;
        }

        p {
          font-size: 1.7rem;
        }
      }
    }

    #cards {
      width: 150px;
      height: 80px;
    }
  }

  @media (min-width: 362px) {
    div {
      div {
        h2 {
          font-size: 1.6rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.8rem;
        }
      }
    }

    #cards {
      width: 170px;
      height: 80px;
    }
  }

  @media (min-width: 401px) {
    div {
      div {
        h2 {
          font-size: 1.8rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 2rem;
        }
      }
    }

    #cards {
      width: 190px;
      height: 85px;
    }
  }

  @media (min-width: 471px) {
    div {
      div {
        h2 {
          font-size: 2rem;
          margin-top: 1rem;
          margin-bottom: 1.2rem;
        }

        p {
          font-size: 2.2rem;
        }
      }
    }

    #cards {
      width: 220px;
      height: 100px;
    }
  }

  @media (min-width: 571px) {
    div {
      div {
        h2 {
          font-size: 2.2rem;
          margin-top: 1rem;
          margin-bottom: 1.3rem;
        }

        p {
          font-size: 2.4rem;
        }
      }
    }

    #cards {
      width: 270px;
      height: 110px;
    }
  }

  @media (min-width: 671px) {
    div {
      div {
        h2 {
          font-size: 2.5rem;
          margin-top: 1rem;
          margin-bottom: 1.7rem;
        }

        p {
          font-size: 2.7rem;
        }
      }
    }

    #cards {
      width: 300px;
      height: 130px;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;

    div {
      justify-content: space-around;
      & + div {
        margin-top: 0;
      }

      div {
        h2 {
          font-size: 2rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 2.2rem;
        }
      }
    }

    #cards {
      width: 185px;
      height: 90px;
    }
  }
`;

export const CardActiveClient = styled.div``;

export const CardInativeClient = styled.div``;

export const CardActiveServers = styled.div``;

export const CardInativeServers = styled.div``;
