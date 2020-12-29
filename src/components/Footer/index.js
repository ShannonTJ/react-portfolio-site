import React from "react";
import {
  FooterContainer,
  FooterTextWrapper,
  FooterText,
  FooterIconWrapper,
  FooterIcon,
} from "./FooterElements";
import { FaGithubAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTextWrapper>
        <FooterText>
          shannon © {new Date().getFullYear()} all rights reserved
        </FooterText>
      </FooterTextWrapper>
      <FooterIconWrapper>
        <FooterIcon
          href="https://github.com/ShannonTJ"
          target="_blank"
          aria-label="Github"
        >
          <FaGithubAlt />
        </FooterIcon>
        <FooterIcon
          href="mailto:shannontjgraphics@gmail.com"
          target="_blank"
          aria-label="Mail"
        >
          <FaEnvelope />
        </FooterIcon>
      </FooterIconWrapper>
    </FooterContainer>
  );
};

export default Footer;
