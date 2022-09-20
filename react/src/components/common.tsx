import { styled } from "@stitches/react";

export const Titulo = styled("h3", {
  textAlign: "left",
  fontSize: "2rem",
  color: "#444",
});

export const Content = styled("p", {
  textAlign: "left",
  fontSize: "1rem",
  color: "#555",
});

export const Container = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};
