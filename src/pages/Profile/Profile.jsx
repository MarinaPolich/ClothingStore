import { Formik } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, updateUserProfile } from "../../redux/auth/auth-operations";
import { getUser } from "../../redux/auth/auth-selector";
import {
  CheckoutBtn,
  ContainerInput,
  ContentBox,
  FormBox,
  FormTitle,
  InputForm,
  TextError,
  Title,
  TitleBox,
} from "./Profile.styled";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  street: "",
  number: "",
  apartment: "",
};

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const formikRef = useRef(null);
  const handelSubmit = (values) => {
    dispatch(updateUserProfile(values));
  };
  useEffect(() => {
    if (formikRef.current)
      formikRef.current.setValues({ ...initialValues, ...user }, false);
  }, [user]);

  return (
    <ContentBox>
      <TitleBox>
        <Title>Личный кабинет</Title>
        <CheckoutBtn
          type="button"
          onClick={() => dispatch(logOut())}
          style={{ marginTop: "0" }}
        >
          Выйти
        </CheckoutBtn>
      </TitleBox>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={handelSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <FormBox onSubmit={handleSubmit}>
              <ContainerInput>
                <FormTitle>Данные покупателя</FormTitle>
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
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Телефон"
                  className={errors.phone && touched.phone ? "error" : ""}
                />
                {errors.phone && touched.phone ? (
                  <TextError>{errors.phone}</TextError>
                ) : null}
              </ContainerInput>
              <ContainerInput>
                <FormTitle>Адрес покупателя</FormTitle>
                <InputForm
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  placeholder="Страна"
                  className={
                    errors.cityRegion && touched.cityRegion ? "error" : ""
                  }
                />
                {errors.cityRegion && touched.cityRegion ? (
                  <TextError>{errors.cityRegion}</TextError>
                ) : null}
                <InputForm
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  placeholder="Город"
                  className={
                    errors.cityRegion && touched.cityRegion ? "error" : ""
                  }
                />
                {errors.cityRegion && touched.cityRegion ? (
                  <TextError>{errors.cityRegion}</TextError>
                ) : null}
                <InputForm
                  type="text"
                  name="street"
                  value={values.street}
                  onChange={handleChange}
                  placeholder="Улица"
                  className={
                    errors.cityRegion && touched.cityRegion ? "error" : ""
                  }
                />
                {errors.cityRegion && touched.cityRegion ? (
                  <TextError>{errors.cityRegion}</TextError>
                ) : null}
                <InputForm
                  type="text"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  placeholder="Дом"
                  className={
                    errors.cityRegion && touched.cityRegion ? "error" : ""
                  }
                />
                {errors.cityRegion && touched.cityRegion ? (
                  <TextError>{errors.cityRegion}</TextError>
                ) : null}
                <InputForm
                  type="text"
                  name="apartment"
                  value={values.apartment}
                  onChange={handleChange}
                  placeholder="Квартира"
                  className={
                    errors.cityRegion && touched.cityRegion ? "error" : ""
                  }
                />
                {errors.cityRegion && touched.cityRegion ? (
                  <TextError>{errors.cityRegion}</TextError>
                ) : null}
                <CheckoutBtn type="submit" disabled={isSubmitting}>
                  Обновить информацию
                </CheckoutBtn>
              </ContainerInput>
            </FormBox>
          );
        }}
      </Formik>
    </ContentBox>
  );
};

export default Profile;
