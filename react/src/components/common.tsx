import { styled } from "@stitches/react";
import React from "react";

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

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto">{children}</div>;
};
