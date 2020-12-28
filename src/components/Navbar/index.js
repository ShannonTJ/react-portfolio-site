import React from "react";
import {
  Nav,
  NavTextWrapper,
  NavText,
  NavLinksWrapper,
  NavLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavTextWrapper>
        <NavText>Hello, I'm Shannon</NavText>
      </NavTextWrapper>
      <NavLinksWrapper>
        <NavLink>Code</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinksWrapper>
    </Nav>
  );
};

export default Navbar;
