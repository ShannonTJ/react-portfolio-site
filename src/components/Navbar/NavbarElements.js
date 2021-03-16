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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50%;
  width: 350px;
  margin: auto;
`;

export const NavText = styled.h1`
  color: #5d6d7e;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0 0 0;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 400;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 60%;
  margin: auto;
  margin-top: 15px;

  @media screen and (max-width: 480px) {
    width: 290px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #5d6d7e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  &.${(props) => props.activeClassName} {
    border-bottom: 1px solid #5d6d7e;
  }

  &:hover {
    color: #5484aa;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
