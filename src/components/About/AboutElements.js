import styled from "styled-components/macro";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 2rem;
  width: 100%;

  @media screen and (max-width: 650px) {
    margin-bottom: 4rem;
  }
`;

export const AboutTextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5d6d7e;

  border-radius: 10px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 650px) {
    width: 410px;
`;

export const AboutTextContainer = styled.div`
  width: 570px;
  margin: 30px 0;

  @media screen and (max-width: 650px) {
    width: 350px;
  }
`;

export const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 32px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-weight: 400;
  margin: 0 30px;
`;
