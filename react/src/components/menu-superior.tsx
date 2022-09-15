import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/app-context";

type LinkItem = {
  title: string;
  href: string;
};

interface IMenuSuperiorProps {
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

const opciones: LinkItem[] = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Usuario",
    href: "/usuarios",
  },
  {
    title: "Noticias",
    href: "/noticias",
  },
];

const opcionesAdmin: LinkItem[] = [
  {
    title: "Dashboard",
    href: "/dash",
  },
];

export const MenuSuperior: React.FC<IMenuSuperiorProps> = ({ titulo }) => {
  // Accedemos al contexto
  const { toggleIdioma, esSpanish, sesion, setSesion } = useAppContext();

  // Sin sesion solo mostrar opciones normales
  const elementos = !sesion ? opciones : [...opciones, ...opcionesAdmin];

  return (
    <MenuWrapper>
      <Menu>
        <MenuOption>{titulo ?? ""}</MenuOption>

        {elementos.map((element) => (
          <MenuOption>
            <Link to={element.href}>{element.title}</Link>
          </MenuOption>
        ))}

        {sesion ? (
          <MenuOption
            onClick={() => {
              setSesion(null);
            }}
          >
            Salir
          </MenuOption>
        ) : null}

        <MenuOption onClick={toggleIdioma}>
          {esSpanish() ? "English" : "Español"}
        </MenuOption>
      </Menu>
    </MenuWrapper>
  );
};

export default MenuSuperior;