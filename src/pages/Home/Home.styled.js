import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContentBox = styled.section`
  width: 100%;
  margin-bottom: 130px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 92px;
  text-align: start;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const Wraper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: center;
  grid-gap: 30px;
  margin: 0 auto;
  max-width: 100%;
`;

export const LinkBtn = styled(NavLink)`
  display: inline-block;
  margin-top: 65px;
  text-decoration: none;
  padding: 22px 50px;
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.39;
  letter-spacing: 0.02em;
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  transition: background-color var(--transition), color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--primary);
    color: var(--bg-body);
  }
`;

export const ItemValue = styled.li`
  width: 350px;
  padding-right: 45px;
  text-align: start;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const TitleItem = styled.h3`
  margin-top: 37px;
  margin-bottom: 24px;

  font-size: 25px;
`;

export const TextItem = styled.p`
  font-size: 17px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbImage = styled.div`
  width: 729px;
  aspect-ratio: 729 / 487;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const ItemTime = styled.div`
  width: 255px;
  text-align: start;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const LinkText = styled(NavLink)`
  display: inline-block;
  margin-top: 28px;
  text-decoration: none;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  background-color: transparent;
  text-decoration: none;
  color: var(--primary);
  transition: color var(--transition), text-decoration var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--hover-bg);
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;
