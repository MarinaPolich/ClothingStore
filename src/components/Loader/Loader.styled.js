import styled from "styled-components";

export const ContainerLoaderBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary);
  transform: translate(50% 50%);
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 1000;
`;
export const LoaderBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
