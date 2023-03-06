import { createPortal } from "react-dom";
import { ContainerLoaderBox, LoaderBox } from "./Loader.styled";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";

const loaderRoot = document.querySelector("#loader-root");

export const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return createPortal(
    <ContainerLoaderBox>
      <LoaderBox>
        <RotatingLines
          strokeColor="var(--bg-body)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </LoaderBox>
    </ContainerLoaderBox>,
    loaderRoot
  );
};
