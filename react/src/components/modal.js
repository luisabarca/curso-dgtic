import { styled } from "@stitches/react";
import { Button } from "./button";

const ModalWrapper = styled("div", {
  border: "1px solid #bbb",
  boxShadow: "3px 3px 2px #ccc", // Sombra
  margin: "15px",
});

const TitleWrapper = styled("p", {

});

export const ModalActions = () => {
  return (
    <>
      <Button size="large" secundario>
        Canelar
      </Button>
      <Button size="large" primary>
        Continuar
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
