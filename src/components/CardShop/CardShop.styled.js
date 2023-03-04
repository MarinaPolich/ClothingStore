import styled from "styled-components";

export const CardBox = styled.li`
  width: 350px;
  text-align: center;
`;

export const ThumbImage = styled.div`
  width: 100%;
  aspect-ratio: 350 / 478;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const TitleCard = styled.h3`
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const TextCard = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--acsent-color);
`;
