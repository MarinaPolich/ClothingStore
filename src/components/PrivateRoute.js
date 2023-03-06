import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsLogin } from "../redux/auth/auth-selector";
import { AuthForm } from "./Authorization/AuthForm";
import Modal from "./Modal/Modal";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(getIsLogin);
  const navigate = useNavigate();

  return !isLoggedIn ? (
    <Modal setModalClose={() => navigate(redirectTo)}>
      <AuthForm />
    </Modal>
  ) : (
    Component
  );
};
