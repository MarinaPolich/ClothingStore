import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getIsRefreshing } from "../../redux/auth/auth-selector";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  const isRefreshing = useSelector(getIsRefreshing);
  return (
    <>
      {isRefreshing && <Loader />}
      <Container>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
