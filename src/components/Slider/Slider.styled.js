import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SliderWraper = styled.div`
  width: 58.5%;
`;

export const ItemSlider = styled.div`
  width: 100%;
  padding-right: 95px;
  padding-bottom: 15px;
`;

export const TitleSlider = styled.h1`
  margin-bottom: 45px;
  font-weight: 500;
  font-size: 55px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const TextSlider = styled.p`
  width: 70%;
  margin-bottom: 52px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  text-align: end;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 70%;
`;

export const LinkDown = styled.a`
  text-decoration: none;
  height: 68px;
  border: 2px solid rgba(110, 156, 159, 0.1);
  cursor: pointer;
`;

export const LinkBtn = styled(NavLink)`
  text-decoration: none;
  padding: 22px 50px;
  text-align: center;

  background-color: var(--primary);
  color: var(--bg-body);
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--hover-bg);
  }
`;

export const TextBtn = styled.span`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.39;
  letter-spacing: 0.02em;
`;

export const SliderIcon = styled.div`
  display: block;
  width: 30px;
  height: 4px;
  margin-inline: 6px;
  background-color: #d1d1d1;
  transition: background-color var(--transition);
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    background-color: var(--text-color);
  }
`;

export const SliderBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 112px;

  & .slick-active > ${SliderIcon} {
    background-color: var(--text-color);
  }
`;
