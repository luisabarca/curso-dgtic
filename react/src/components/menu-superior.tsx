import { styled } from "@stitches/react";
import { Link } from "react-router-dom";

type LinkItem = {
  title: string;
  href: string;
};

interface IMenuSuperiorProps {
  elementos: LinkItem[];
  titulo?: string;
}

// Copiado de los estilos css
const MenuWrapper = styled("div", {
  backgroundColor: "#282c34",
  minHeight: "10vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
  margin: "0",
  padding: "0",
});

const Menu = styled("ul", {
  margin: "0",
  padding: "0",
  display: "flex",
});

const MenuOption = styled("li", {
  listStyle: "none",
  margin: "0",
  padding: "4px 12px",
});

export const MenuSuperior: React.FC<IMenuSuperiorProps> = ({
  titulo,
  elementos,
}) => {
  return (
    <MenuWrapper>
      <Menu>
        <MenuOption>{titulo ?? ""}</MenuOption>

        {elementos.map((element) => (
          <MenuOption>
            <Link to={element.href}>{element.title}</Link>
          </MenuOption>
        ))}
      </Menu>
    </MenuWrapper>
  );
};
