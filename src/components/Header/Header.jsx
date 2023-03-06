import SVG from "react-inlinesvg";
import {
  HeaderBox,
  LogoBtn,
  LinkText,
  NavBox,
  LinkCart,
  ProfileBtn,
} from "./Header.styled";
import { cart, logo, tel, user } from "../../assets/icon";
import { Navigation } from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { getIsLogin } from "../../redux/auth/auth-selector";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../Authorization/AuthForm";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogin = useSelector(getIsLogin);
  const navigate = useNavigate();

  const authHandle = () => {
    if (isLogin) navigate("/profile");
    else setIsModalOpen(true);
  };

  useEffect(() => {
    if (isLogin) setIsModalOpen(false);
  }, [isLogin]);

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
        <ProfileBtn type="button" onClick={authHandle}>
          <SVG src={user} width={25} height={25} title="user" />
        </ProfileBtn>
        <LinkCart to="/cart">
          <SVG src={cart} width={25} height={25} title="cart" />
        </LinkCart>
      </NavBox>
      {isModalOpen && (
        <Modal setModalClose={setIsModalOpen}>
          <AuthForm />
        </Modal>
      )}
    </HeaderBox>
  );
};
