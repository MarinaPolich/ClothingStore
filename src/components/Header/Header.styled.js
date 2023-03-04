import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;
export const LogoBtn = styled(NavLink)`
  height: 25px;
  text-decoration: none;
  background-color: transparent;
  color: #000;
`;

export const NavBox = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
`;

export const LinkText = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 25px;
  margin-right: 25px;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  white-space: nowrap;
  color: var(--text-color);
`;

export const LinkContact = styled(NavLink)`
  height: 25px;
  width: 100%;
  text-decoration: none;
  color: var(--text-color);
  transition: color var(--transition);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:active,
  &.active,
  &:hover,
  &:focus {
    color: var(--primary);
  }
`;
