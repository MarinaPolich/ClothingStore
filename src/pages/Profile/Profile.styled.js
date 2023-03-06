import styled from "styled-components";
import { Field, Form } from "formik";

export const ContentBox = styled.section`
  width: 100%;
  padding-block: 130px;
  text-align: end;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 190px;
`;

export const Title = styled.h2`
  display: inline-flex;
  text-align: start;
  font-weight: 500;
  font-size: 55px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const ContainerInput = styled.div`
  width: 350px;
  text-align: start;
`;

export const FormTitle = styled.h3`
  margin-bottom: 47px;
  text-align: start;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--text-color);
`;

export const FormBox = styled(Form)`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
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

  &:hover,
  &:focus {
    border: none;
    border-bottom: 1px solid var(--hover-bg);
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
  line-height: 1.3;
  color: var(--warning);
`;

export const CheckoutBtn = styled.button`
  margin-top: 69px;
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
