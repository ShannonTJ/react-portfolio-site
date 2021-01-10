import styled from "styled-components/macro";

export const FooterContainer = styled.footer`
  background: #000;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  position: absolute;
  display: flex;
`;

export const AnotherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 315px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const FooterText = styled.small`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 100;
  text-align: center;
  padding: 0 0 0 30px;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100px;

  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const FooterIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 100;
  padding: 0 30px 0 0;
  margin-top: 5px;

  @media (max-width: 480px) {
    padding: 0 15px 0 15px;
  }
`;
