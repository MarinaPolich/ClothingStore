import { NavBox, StyledLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavBox>
      <StyledLink to="/">Главная</StyledLink>
      <StyledLink to="/shop">Магазин</StyledLink>
      <StyledLink to="/brand">О бренде</StyledLink>
      <StyledLink to="/contacts">Контакты</StyledLink>
    </NavBox>
  );
};
