import styled from "styled-components";

export const CountDownContentContainer = styled.div`
  text-align: center;

  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-contnent: center;
  align-items: center;

  padding: 8rem 0 3rem 0;
`;
export const CountDownHeading = styled.h3`
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 2px;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 4rem;
    letter-spacing: 2px;
  }
`;
export const CountDownSubText = styled.div`
  text-transform: uppercase;
  font-size: 0.9rem @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

export const CountDownTimer = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  width: 80%;
  padding: 6rem 0;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

export const TimerCounter = styled.div`
  text-align: center;
`;

export const TimerCount = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 4rem;
  }
`;

export const TimerCountText = styled.small`
  font-size: 0.5rem;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;
