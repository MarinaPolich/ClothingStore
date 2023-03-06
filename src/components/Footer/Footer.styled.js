import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
  background-color: var(--footer-color);
`;

export const Container = styled.div`
  width: 1110px;

  margin: 0 auto;
`;

export const Wraper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContactBox = styled.div`
  width: auto;
  text-align: end;
`;

export const ContactLink = styled.a`
  display: block;
  margin-bottom: 9px;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);
  transition: color var(--transition);
  cursor: pointer;

  &:active,
  &.active,
  &:hover,
  &:focus {
    color: var(--primary);
  }
`;

export const SocialItem = styled(ContactLink)`
  width: 22px;
  height: 22px;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export const WraperSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  margin-block: 30px;
`;

export const WraperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;
