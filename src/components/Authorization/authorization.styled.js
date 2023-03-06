import styled from "styled-components";
import { Field, Form } from "formik";

export const TitleForm = styled.h2`
  margin-bottom: 19px;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: var(--text-color);
`;

export const FormBox = styled(Form)`
  width: 100%;
  /* overflow: hidden;
  margin: 0 auto; */
  background-color: transparent;
`;

export const InputForm = styled(Field)`
  width: 100%;
  padding-block: 16px;
  border: none;
  border-bottom: 1px solid var(--text-color);
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);

  &:not(:last-child) {
    margin-bottom: 19px;
  }
  &.error {
    border: 1px solid var(--warning);
  }
`;

export const TextError = styled.p`
  position: absolute;
  margin-top: -16px;
  margin-left: 32px;
  font-size: 12px;
  line-height: 1.333;
  color: var(--warning);
`;

export const BoxLink = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

export const TextLink = styled.span`
  font-size: 12px;
  line-height: 1.333;
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

export const GoogleBtn = styled.button`
  width: 100%;
  margin-top: 35px;
  padding: 20px 50px 17px;
  text-align: center;
  border: 1px solid var(--primary);
  background-color: transparent;
  color: var(--bg-body);
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--hover-bg);
  }
`;

export const StyledLink = styled.button`
  border: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  background-color: transparent;
  margin-left: 14px;
  color: var(--primary);
  transition: color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--hover-bg);
  }
`;
