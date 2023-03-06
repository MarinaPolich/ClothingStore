import styled from "styled-components";

export const CardBox = styled.li`
  width: 350px;
  text-align: center;
`;

export const ThumbImage = styled.div`
  width: 100%;
  aspect-ratio: 350 / 478;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;

    background-color: var(--bg-bedrock);

    transform: translateY(100%);
    transition: transform var(--transition);
  }

  &:hover::before,
  &:focus::before {
    transform: translateY(0);
  }

  &:hover button,
  &:focus button {
    transform: translate(-50%, -200%);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const AddBtn = styled.button`
  padding: 22px 50px;
  text-align: center;
  white-space: nowrap;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.39;
  letter-spacing: 0.02em;
  background-color: transparent;
  color: var(--bg-body);
  border: 1px solid var(--bg-body);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  transition: transform var(--transition);
  z-index: 5;
  cursor: pointer;
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

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 35px;
  padding: 22px 50px;
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.39;
  letter-spacing: 0.02em;
  border: none;
  background-color: var(--primary);
  color: var(--bg-body);
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--hover-bg);
  }
`;
