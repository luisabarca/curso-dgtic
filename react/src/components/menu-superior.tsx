import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/app-context";
import { useFavoritosContext } from "../context/favoritos-context";

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
  fontSize: "1.3rem",
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
  cursor: "pointer", // Muestra la manita al botón de lenguaje que no es enlace
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
  {
    title: "Favoritos",
    href: "/favoritos",
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

  const { count } = useFavoritosContext();

  // Sin sesion solo mostrar opciones normales
  const elementos = !sesion ? opciones : [...opciones, ...opcionesAdmin];

  const handleBotonSesion = () => {
    if (!sesion) {
      // Esto puede ir en el context como login() / logout
      // para no exponer detalles de implementación
      setSesion({
        id: 1,
        usuario: "luis",
      });
    } else {
      // Esto puede ir en el context como logout()
      setSesion(null);
    }
  };

  const renderCount = (url: string) => {
    // solo el link a favoritos tiene su contador
    if (url !== "/favoritos") return null;
    // mostrar solo si es mayor a 1
    if (count < 1) return null;

    return (
      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
        {count}
      </span>
    );
  };

  return (
    <MenuWrapper>
      <Menu>
        <MenuOption>{titulo ?? ""}</MenuOption>

        {elementos.map((element) => (
          <MenuOption>
            <Link to={element.href}>
              {element.title} {renderCount(element.href)}
            </Link>
          </MenuOption>
        ))}

        <MenuOption onClick={toggleIdioma}>
          {esSpanish() ? "English" : "Español"}
        </MenuOption>

        <MenuOption onClick={handleBotonSesion}>
          {sesion ? "Salir" : "Iniciar sesión"}
        </MenuOption>
      </Menu>
    </MenuWrapper>
  );
};

export default MenuSuperior;
