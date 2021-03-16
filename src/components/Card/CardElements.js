import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    margin-bottom: 4rem;
  }
`;

export const CardGroupWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;

  padding: 0 10px;

  @media screen and (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentContainer = styled.div`
  background: #5d6d7e;
  width: 350px;
  height: 450px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
`;

export const SvgImage = styled.img`
  width: 250px;
  height: 250px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 300px;
`;
export const HeaderText = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 0;
`;

export const Text = styled.p`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  background-color: #5484aa;
  color: #fff;
  margin-top: 10px;

  text-decoration: none;
  letter-spacing: 2px;
  padding: 10px 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #fff;
    color: #5484aa;
  }
`;
