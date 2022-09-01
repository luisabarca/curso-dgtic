// importa con alias
import { styled as styledStitches } from "@stitches/react";

export const Button = styledStitches("button", {
  backgroundColor: "black",
  color: "white",
  padding: "6px 15px",
  margin: "12px",
  border: "none",
  "&:hover": {
    backgroundColor: "#333",
  },
  // Faltaba el @media
  "@media(max-width: 520px)": {
    backgroundColor: "red",
  },
  // Faltaba el @media
  "@media(min-width: 1200px)": {
    backgroundColor: "blue",
  },
  variants: {
    size: {
      small: {
        height: "32px",
        padding: "8px",
      },
      large: {
        height: "48px",
        padding: "15px",
        fontSize: "1.5rem",
        lineHeight: "1.2rem",
      },
    },
    primary: {
      true: {
        backgroundColor: "green",
        "&:hover": {
          backgroundColor: "DarkGreen",
        },
      },
    },
    secundario: {
      true: {
        backgroundColor: "gray",
        "&:hover": {},
      },
    },
  },
});
