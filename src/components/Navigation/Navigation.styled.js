import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBox = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
`;

export const StyledLink = styled(NavLink)`
  width: 75px;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  text-align: center;
  letter-spacing: 0.02em;
  white-space: nowrap;
  color: var(--text-color);
  transition: color var(--transition), font-weight var(--transition);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 45px;
  }

  &:active,
  &.active,
  &:hover,
  &:focus {
    font-weight: 700;
    color: var(--primary);
  }
`;
