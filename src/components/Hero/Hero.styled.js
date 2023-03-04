import styled from "styled-components";

export const HeroWraper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 130px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 41.5%;
  padding-left: 50px;
  padding-top: 40px;
  padding-bottom: 60px;
  text-align: end;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(((100vw - 1110px) / 2) + 100%);
    height: 200%;
    background-color: var(--footer-color);
    z-index: -1;
  }
`;

export const ThumbaCenter = styled.div`
  position: relative;
  width: 410px;
  aspect-ratio: 410 / 646;
`;

export const ThumbaLeft = styled.div`
  position: absolute;
  left: -20%;
  bottom: 0;
  width: 190px;
  aspect-ratio: 190 / 320;
`;

export const ThumbaRight = styled.div`
  position: absolute;
  top: 165px;
  left: 80%;
  width: 197px;
  aspect-ratio: 197 / 197;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;
