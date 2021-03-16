import styled from "styled-components/macro";

export const Container = styled.div`
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

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5d6d7e;

  border-radius: 10px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 650px) {
    width: 410px;

  @media screen and (max-width: 480px) {
    width: 330px;
  }
`;

export const TextContainer = styled.div`
  width: 580px;
  margin: 30px 0;

  @media screen and (max-width: 650px) {
    width: 350px;
  }

  @media screen and (max-width: 480px) {
    width: 290px;
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
  margin: 0 40px;
`;

export const TextList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #fff;
  font-weight: 400;
  margin: 0 0 0 60px;
  grid-column-gap: 20px;
  list-style: disc outside;

  @media screen and (max-width: 650px) {
    margin: auto;
    grid-column-gap: 30px;
  }

  @media screen and (max-width: 480px) {
    margin: auto;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 60px;
  }
`;

export const TextListItem = styled.li``;

export const Space = styled.br`
  margin-top: 5px;
`;

export const Image = styled.img`
  display: flex;
  width: 350px;
  border-radius: 100%;
  margin-bottom: 2rem;
`;
