import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1035px) {
    margin-top: 6rem;
  }

  @media screen and (max-width: 480px) {
    margin-top: 6rem;
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

  @media screen and (max-width: 1480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1035px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentContainer = styled.div`
  background: #fff;
  width: 350px;
  max-height: 400px;
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

export const ImageContainer = styled.div``;
export const Image = styled.img``;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeaderText = styled.h1``;
export const Text = styled.p``;
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Link = styled.a``;
