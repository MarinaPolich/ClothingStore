import SVG from "react-inlinesvg";
import {
  HeaderBox,
  LogoBtn,
  LinkText,
  NavBox,
  LinkContact,
} from "./Header.styled";
import { cart, logo, tel, user } from "../../assets/icon";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <HeaderBox>
      <LogoBtn to="/">
        <SVG src={logo} width={140} height={25} title="logo" />
      </LogoBtn>
      <Navigation />
      <NavBox>
        <LinkText href="tel:+380958235412">
          <SVG src={tel} width={25} height={25} title="tel" />
          <span>+38 (095) 823-54-12</span>
        </LinkText>
        <LinkContact to="/profile">
          <SVG src={user} width={25} height={25} title="user" />
        </LinkContact>
        <LinkContact to="/cart">
          <SVG src={cart} width={25} height={25} title="cart" />
        </LinkContact>
      </NavBox>
    </HeaderBox>
  );
};
