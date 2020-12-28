import React from "react";
import {
  Nav,
  NavTextWrapper,
  NavText,
  NavLinksWrapper,
  NavLink2,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavTextWrapper>
        <NavText>Hello, I'm Shannon</NavText>
      </NavTextWrapper>
      <NavLinksWrapper>
        <NavLink2 exact to="code" activeClassName="active">
          Code
        </NavLink2>
        <NavLink2 exact to="about" activeClassName="active">
          About
        </NavLink2>
        <NavLink2 exact to="contact" activeClassName="active">
          Contact
        </NavLink2>
      </NavLinksWrapper>
    </Nav>
  );
};

export default Navbar;
