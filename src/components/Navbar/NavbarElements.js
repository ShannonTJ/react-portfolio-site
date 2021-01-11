import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  top: 0;
  height: 120px;
  width: 100%;
  position: absolute;
`;

export const NavTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

export const NavText = styled.h1`
  color: #5d6d7e;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 0 0 0;
  text-transform: uppercase;
  font-weight: 400;
  width: 100%;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;

export const StyledNavLink = styled(NavLink)`
  color: #5d6d7e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
  padding: 0 0.2rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;

  &.${(props) => props.activeClassName} {
    border-bottom: 1px solid #5d6d7e;
  }

  &:hover {
    color: red;
  }
`;
