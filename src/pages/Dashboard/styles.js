import styled from 'styled-components';

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

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const DivGraphics = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;

    div {
      & + div {
        margin-left: 1.5rem;
      }
    }
  }

  #divPlans {
    height: 500px;
  }

  @media (max-width: 320px) {
    div {
      width: 100%;
      height: 400px;
      flex-direction: column;

      & + div {
        margin-top: 1rem;
      }

      div {
        & + div {
          margin-left: 0;
        }
      }
    }

    #divPlans {
      height: 300px;
    }
  }

  @media (min-width: 321px) {
    div {
      width: 100%;
      height: 400px;
      flex-direction: column;

      & + div {
        margin-top: 1rem;
      }

      div {
        & + div {
          margin-left: 0;
        }
      }
    }

    #divPlans {
      height: 300px;
    }
  }

  @media (min-width: 401px) {
    div {
      height: 450px;
    }

    #divPlans {
      height: 350px;
    }
  }

  @media (min-width: 401px) {
    div {
      height: 500px;
    }
  }

  @media (min-width: 471px) {
    div {
      height: 550px;
    }
  }

  @media (min-width: 571px) {
    div {
      height: 600px;
    }
  }

  @media (min-width: 671px) {
    div {
      height: 700px;
    }

    #divPlans {
      height: 400px;
    }
  }

  @media (min-width: 769px) {
    margin-top: 2.5rem;

    div {
      height: 300px;
      flex-direction: row;
      margin-top: 0;

      & + div {
        margin-top: 0;
      }

      div {
        & + div {
          margin-left: 1rem;
        }
      }
    }

    #divPlans {
      margin-top: 1rem;
    }
  }

  @media (min-width: 769px) {
    margin-top: 2.5rem;

    div {
      height: 500px;
      flex-direction: row;
      margin-top: 0;

      & + div {
        margin-top: 0;
      }

      div {
        & + div {
          margin-left: 1rem;
        }
      }
    }

    #divPlans {
      margin-top: 1rem;
    }
  }
`;
