import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #000;
  bottom: 0;
  height: 80px;
  width: 100%;
  position: absolute;
  display: flex;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const FooterText = styled.small`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 100;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
  width: 50%;
`;

export const FooterIcon = styled.a`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 100;
  display: inline-block;
`;
