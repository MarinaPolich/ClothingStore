import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
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
