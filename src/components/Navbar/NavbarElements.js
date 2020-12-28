import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  top: 0;
  height: 120px;
  width: 100%;
  position: sticky;
`;

export const NavTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavText = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 0;
  text-transform: uppercase;
  font-weight: 400;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const NavLink = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;
