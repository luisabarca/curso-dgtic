import { styled } from "@stitches/react";
import { useAppContext } from "../context/app-context";
import { Button } from "./button";

const ModalWrapper = styled("div", {
  border: "1px solid #bbb",
  boxShadow: "3px 3px 2px #ccc", // Sombra
  margin: "15px",
});

const TitleWrapper = styled("p", {

});

export const ModalActions = () => {
  const { esSpanish } = useAppContext();

  return (
    <>
      <Button size="large" secundario>
        {esSpanish() ? "Canelar" : "Cancel"}
      </Button>
      <Button size="large" primary>
        {esSpanish() ? "Continuar" : "Continue"}
      </Button>
    </>
  );
};

export const Modal = ({ title }) => (
  <ModalWrapper>
    <TitleWrapper>{title ?? ""}</TitleWrapper>

    <ModalActions />
  </ModalWrapper>
);
