import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-bedrock);
  z-index: 100;
`;

export const ModalContent = styled.div`
  width: 490px;
  padding: 70px;
  background-color: var(--bg-body);
  max-height: calc(100vh - 1rem);
  overflow: hidden;
  text-align: center;
  transform: scale(1);
`;

export const CloseIcon = styled.button`
  border: none;
  position: absolute;
  top: 32px;
  right: 32px;
  padding: 0;
  background-color: transparent;
  color: var(--text-color);
  transition: color var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--hover-bg);
  }
`;
