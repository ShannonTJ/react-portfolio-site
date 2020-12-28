import React from "react";
import {
  Nav,
  NavTextWrapper,
  NavText,
  NavLinksWrapper,
  StyledNavLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavTextWrapper>
        <NavText>Hello, I'm Shannon</NavText>
      </NavTextWrapper>
      <NavLinksWrapper>
        <StyledNavLink exact to="code" activeClassName="active">
          Code
        </StyledNavLink>
        <StyledNavLink exact to="about" activeClassName="active">
          About
        </StyledNavLink>
        <StyledNavLink exact to="contact" activeClassName="active">
          Contact
        </StyledNavLink>
      </NavLinksWrapper>
    </Nav>
  );
};

export default Navbar;
