import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import {
  BoxLink,
  FormBox,
  InputForm,
  StyledLink,
  SubmitBtn,
  TextError,
  TextLink,
  TitleForm,
} from "./authorization.styled";
import { registration } from "../../redux/auth/auth-operations";

const RegistrationSchema = Yup.object().shape({
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
  confirm: Yup.string()
    .required("Enter password")
    .oneOf(
      [Yup.ref("password"), null],
      "Your passwords are different, try harder!"
    ),
  name: Yup.string()
    .matches(/^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+$/, "Invalid name")
    .min(2, "Too Short, at least 2!")
    .max(16, "Too Long, at maximum 16!"),
});

export const RegisterForm = ({ goToLog }) => {
  const dispatch = useDispatch();

  const handelSubmit = ({ email, password, name }) => {
    dispatch(registration({ email, password, name }));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirm: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={handelSubmit}
    >
      {({ handleChange, values, errors, touched }) => (
        <FormBox>
          <TitleForm>Регистрация</TitleForm>
          <InputForm
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Имя"
            className={errors.name && touched.name ? "error" : ""}
          />
          {errors.name && touched.name ? (
            <TextError>{errors.name}</TextError>
          ) : null}
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
          <InputForm
            type="password"
            name="confirm"
            value={values.confirm}
            onChange={handleChange}
            placeholder="Подтвердите пароль"
            className={errors.confirm && touched.confirm ? "error" : ""}
          />
          {errors.confirm && touched.confirm ? (
            <TextError>{errors.confirm}</TextError>
          ) : null}

          <SubmitBtn type="submit">Зарегистрироваться</SubmitBtn>
          <BoxLink>
            <TextLink>Вы уже зарегестрированы? </TextLink>
            <StyledLink type="button" onClick={goToLog}>
              Авторизоваться
            </StyledLink>
          </BoxLink>
        </FormBox>
      )}
    </Formik>
  );
};
