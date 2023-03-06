import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import SVG from "react-inlinesvg";

import {
  BoxLink,
  FormBox,
  GoogleBtn,
  InputForm,
  StyledLink,
  SubmitBtn,
  TextError,
  TextLink,
  TitleForm,
} from "./authorization.styled";
import { login, loginGoogle } from "../../redux/auth/auth-operations";
import { google } from "../../assets/icon";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(
      /^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/,
      "Invalid email"
    )
    .min(10, "Email is too short, at least 10!")
    .max(63, "Email is too long, at maximum 63!")
    .required("Enter email"),
  password: Yup.string()
    .min(7, "Password is too short, at least 7!")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Invalid password, it must contain only letters and numbers!"
    )
    .max(32, "Password is too long, at maximum 32!")
    .required("Enter password"),
});

export const LoginForm = ({ goToReg }) => {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(getIsLoading);
  const handelSubmit = async ({ email, password }) => {
    await dispatch(login({ email, password }));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handelSubmit}
    >
      {({ handleChange, values, errors, touched }) => (
        <FormBox>
          <TitleForm>Авторизация</TitleForm>
          <InputForm
            type="email"
            name="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
            placeholder="E-mail"
            className={errors.email && touched.email ? "error" : ""}
          />
          {errors.email && touched.email ? (
            <TextError>{errors.email}</TextError>
          ) : null}
          <InputForm
            type="password"
            name="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            placeholder="Ваш пароль"
            className={errors.password && touched.password ? "error" : ""}
          />
          {errors.password && touched.password ? (
            <TextError>{errors.password}</TextError>
          ) : null}

          <SubmitBtn type="submit">Войти</SubmitBtn>
          <GoogleBtn type="button" onClick={() => dispatch(loginGoogle())}>
            <SVG src={google} width={24} height={24} title="google" />
          </GoogleBtn>
          <BoxLink>
            <TextLink>Нет аккаунта? </TextLink>
            <StyledLink type="button" onClick={goToReg}>
              Зарегистрироваться
            </StyledLink>
          </BoxLink>
        </FormBox>
      )}
    </Formik>
  );
};
